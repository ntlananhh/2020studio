import './styles/base.css';
import Header from './components/header/index.js'
import ProjectList from './components/project-list';
function App() {
  return (
    <div className="App">
      <Header></Header>  
      <ProjectList></ProjectList>
    </div>
  );
}

export default App;
