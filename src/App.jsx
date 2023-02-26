import './App.css';
import Convention from './components/Convention';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="App">
      <div className='Cover'>
        <h1>Largest Anime Conventions</h1>
      </div>
      <Convention />
    </div>
  )
}

export default App