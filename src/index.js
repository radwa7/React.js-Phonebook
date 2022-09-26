import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Edit from './components/Edit';


ReactDOM.render(
  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<NotFound />} />
        {/* <Route path='/About/:id' element={<About />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
