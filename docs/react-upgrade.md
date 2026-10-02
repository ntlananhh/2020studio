# React upgrade

React and React DOM are pinned to **19.3.0**, the npm `latest` stable release checked on 2026-10-02.

## Dependency changes

| Package | Previous locked version | New locked version |
| --- | --- | --- |
| `@splidejs/react-splide` | 0.7.10 | 0.7.12 |
| `@splidejs/splide` | 4.0.17 | 4.1.4 |
| `react` | 18.2.0 | 19.3.0 |
| `react-bootstrap` | 2.7.0 | 2.10.10 |
| `react-dom` | 18.2.0 | 19.3.0 |
| `react-router-dom` | 6.3.0 | 6.30.6 |
| `react-zoom-pan-pinch` | 2.3.2 | 4.2.0 |
| `@testing-library/dom` | 8.17.1 | 10.4.2 |
| `@testing-library/jest-dom` | 5.16.5 | 6.9.1 |
| `@testing-library/react` | 13.4.0 | 16.3.3 |
| `@testing-library/user-event` | 13.5.0 | 14.6.7 |

Testing Library packages were moved to devDependencies; `@testing-library/dom` is now an explicit peer dependency. Compatible transitive security patches were applied with `npm audit fix` (no force or legacy peer resolution).

## Removed packages

`react-awesome-lightbox` was not imported anywhere. The existing React Bootstrap modal and zoom/pan viewer remain in place; no additional lightbox is needed.

The following unused packages were removed: `@react-google-maps/api`, `react-alice-carousel`, `react-awesome-lightbox`, `react-fullscreen-image`, `react-google-maps`, `react-lazy-load`, `react-lazy-load-image-component`, `react-modal`, `react-multi-carousel`, `stylis-plugin-rtl`, and `swiper`. The unused Alice Carousel CSS import was also removed.

`react-iframe` was replaced with a native iframe after integration tests detected its invalid `allowFullscreen` DOM property. Map URL, dimensions, fullscreen support, and styling are preserved.

## Compatibility findings

In the original lockfile, these direct packages excluded React 19 from their peer ranges: `@react-google-maps/api`, `@testing-library/react`, `react-awesome-lightbox`, `react-fullscreen-image`, `react-google-maps`, `react-lazy-load`, `react-lazy-load-image-component`, and `react-modal`. The old React DOM also requires a matching React version. Transitive `@react-aria/ssr` and `recompose` had incompatible ranges; they were respectively updated or removed with their parent dependencies.

The existing entry point already used `createRoot`. Duplicate StrictMode nesting was removed. Unsupported Splide props that leaked onto DOM nodes were removed, retaining the actual slider options. The image URL prop is no longer forwarded to the modal DOM, and zoom buttons have accessible names. React Router remains on the v6 API, with its future flags enabled. CRA already enables the automatic JSX transform required by React 19.

## Validation

- Clean lockfile install: `npm ci`.
- Production build: `npm run build`.
- Integration tests: `CI=true npm test -- --watchAll=false --runInBand` (six tests covering routes, filtering, image viewer controls and Escape dismissal, and missing-project redirect). Tests use real Splide, Bootstrap, and zoom components under StrictMode; only browser APIs absent from jsdom are stubbed.
- Dependency validation: `npm ls --all` and `npm ls react react-dom`.

## Remaining risks

- Create React App / `react-scripts@5.0.1` is deprecated. Its older build/test stack still contains deprecated transitive packages such as ESLint 8, workbox-google-analytics, rollup-plugin-terser, and older Babel proposal plugins. A build-tool migration should be a separate change.
- After a clean install, npm reports **30 vulnerabilities: 9 low, 6 moderate, 15 high, 0 critical** (down from 75 immediately after the React upgrade). Remaining findings include CRA build/test/dev-server dependencies and React Router v6. Router advisories concern untrusted navigation targets and SSR hydration; this app uses static internal links and client-only routing. Updating to Router v7 is separate scope.
- External Bootstrap 4/5 scripts, jQuery, Google Maps, Font Awesome, and hosted fonts remain as before. They are outside the npm dependency tree.
- jsdom checks do not verify visual layout, touch gestures, or live external services. A browser review of mobile navigation and image zoom/pan remains advisable.

## Files changed

`package.json`, `package-lock.json`, `src/index.js`, `src/App.test.js`, `src/components/contact/index.js`, `src/components/project-detail/index.js`, `src/components/project-list/index.js`, `src/styles/base.css`, and this report.
