
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="*" element={<HomePage/>} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/info" element={<Info />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/info" element={<Info />} /> */}
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
