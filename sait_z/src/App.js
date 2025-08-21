
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';
import Catalog from './components/Goods/Catalog';
import ClothCoffins from './components/Goods/ClothCoffins';
import PolishedCoffins from './components/Goods/PolishedCoffins';
import Bedding from './components/Goods/Bedding';
import Dress from './components/Goods/Dress';
import Crosses from './components/Goods/Crosses';
import Garlands from './components/Goods/Garlands';
import Compositions from './components/Goods/Compositions';
import Wreaths from './components/Goods/Wreaths';
import Cars from './components/Goods/Cars';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />          
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cloth-coffins" element={<ClothCoffins />} />          
          <Route path="/polished-coffins" element={<PolishedCoffins />} />
          <Route path="/bedding" element={<Bedding />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/crosses" element={<Crosses />} />
          <Route path="/garlands" element={<Garlands />} />
          <Route path="/compositions" element={<Compositions />} />
          <Route path="/wreaths" element={<Wreaths />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
