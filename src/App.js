import './App.scss';
import Search from './components/nav/search.js';
import ProductsList from './components/productsList/productsList';
import BreadCrumb from './components/breadCrumb/breadCrumb';
import ProductsDescription from './components/productDescription/productDescription';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Search />
        <BreadCrumb />
        <Routes>
          <Route path='/items/search/:product' element={<ProductsList />} />
          <Route path='/items/:id' element={<ProductsDescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
