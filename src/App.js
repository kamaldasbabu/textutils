import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';





function App() {
  return (
    <>
      <div className='main-container'>
        <div className='container'>
          <Navbar title="Text Utils"></Navbar>
          <div className='mt-4'>
            <TextForm></TextForm>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
