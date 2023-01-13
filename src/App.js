import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import { bookmarkLoader } from './Loaders';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
    <Header/>
    <Outlet/>
    <Edit loader={bookmarkLoader}/>
    </div>
  );
}

export default App;
