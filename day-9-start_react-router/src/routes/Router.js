import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Products from '../components/Products';
import ProductDetails from '../components/ProductDetails';

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
