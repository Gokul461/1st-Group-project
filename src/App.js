// import Nav from './components/navbar/nav';
// import Hero from './components/pages/hero';
// import Footer from './components/footer/footer';
// function App() {
//   return (
//     <div className="App">
// <Nav/>
// <Hero/>
// <Footer/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/nav';
import Hero from './components/pages/hero';
import Footer from './components/footer/footer';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './components/CategoryPage'; // New Category Page

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
