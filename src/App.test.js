import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function renderRoute(path) {
  return render(
    <React.StrictMode>
      <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    </React.StrictMode>
  );
}

beforeAll(() => {
  // Splide and Bootstrap observe media queries in browsers.
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: query => ({
      matches: false,
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
  });
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders the home carousel and filters projects by category', () => {
  const { unmount } = renderRoute('/');
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getAllByText('Tan An Villa').length).toBeGreaterThan(0);
  unmount();
  renderRoute('/public-work');
  expect(screen.getAllByText('Sline Billiards').length).toBeGreaterThan(0);
  expect(screen.queryByText('Tan An Villa')).not.toBeInTheDocument();
});

test.each([
  ['/about-us', 'About us'],
  ['/contact', 'Contact us'],
  ['/unknown/page', 'We are sorry, Page not found!'],
])('renders route %s', (path, heading) => {
  renderRoute(path);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
});

test('opens the image viewer, uses zoom controls, and closes with Escape', async () => {
  const { container } = renderRoute('/project/Tan-An-Villa');
  fireEvent.click(container.querySelector('.splide__slide:not(.splide__slide--clone) img.test'));
  const dialog = await screen.findByRole('dialog');
  expect(dialog).toBeInTheDocument();
  expect(screen.getByAltText('Project detail')).toHaveAttribute(
    'src', '/assets/project-detail/tan-an-villa/original/01.jpg'
  );
  fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }));
  fireEvent.click(screen.getByRole('button', { name: 'Zoom out' }));
  fireEvent.click(screen.getByRole('button', { name: 'Reset zoom' }));
  fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape', keyCode: 27 });
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
});

test('redirects a missing project to the home page', async () => {
  renderRoute('/project/missing');
  expect(await screen.findByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getAllByText('Tan An Villa').length).toBeGreaterThan(0);
});
