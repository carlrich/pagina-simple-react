import './App.css';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
