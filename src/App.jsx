import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import ProductsPage from "./pages/ProductsPage";
import BrandsPage from "./pages/BrandsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./utils/ScrollToTop";
import ProductsShowcase from "./pages/ProductsShowcase";
import BrandCollectionPage from "./pages/BrandCollectionPage";

function App() {
  return (
    <Router>
      <Analytics/>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsShowcase />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="brands/:brandId" element={<BrandCollectionPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
