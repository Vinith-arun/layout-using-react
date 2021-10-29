import './App.css';
import Header from './components/Header/Header';
import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Header/>
      <div id="body">
        <Navbar/>
        <Contents/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
