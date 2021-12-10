import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer'

import AppRouter from './components/router/router';

function App() {
  return (
    <div className="App">
     
      <AppRouter />
      <Footer/>
    </div>
  );
}

export default App;
