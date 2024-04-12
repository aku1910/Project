import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './component/Blogs';
import Featured from './component/Featured';
import Home from './component/Home';
import Pages from './component/Pages';
import Shop from './component/Shop';
import ImageSlider from './ImageSlider'; 
import Multislider from './multislider/Multislider'
import Cards from './cards/Cards'
import Layout from './component/Layout/Layout';
import Products from './Products';
import { BasketSlice } from './Slice/BasketSlice';
import { Store } from './Store';

const SliderData = [
  {
    image: 'https://fone-store-demo.myshopify.com/cdn/shop/files/s1.jpg?v=1660640243',
  },
  {
    image: 'https://fone-store-demo.myshopify.com/cdn/shop/files/s2.jpg?v=1660640292',
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="featured" element={<Featured />} />
            <Route path="pages" element={<Pages />} />
            <Route path="blogs" element={<Blogs />} />
          </Routes>
        <ImageSlider slides={SliderData} /> 
        <Multislider/>
        <Cards />
        <Products/>
        <BasketSlice />
        <Store/>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
