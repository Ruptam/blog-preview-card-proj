import './App.css';
import Content from './content/Content';
import Footer from './footer/Footer';

function App() {

  return (
    <>
      <div className='container'>
        <div className='card'>
          <img src="illustration-article.svg" className='brand-image'/>
          <Content />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
