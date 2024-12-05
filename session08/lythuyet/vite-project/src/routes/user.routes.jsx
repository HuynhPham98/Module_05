import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ListProduct from "../pages/ListProduct";
import ProductDetail from "../pages/ProductDetail";

const userRouters = [
  { path: "/home", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/list-product", element: <ListProduct /> },
  { path: "/product-detail", element: <ProductDetail /> },
];

export default userRouters;
