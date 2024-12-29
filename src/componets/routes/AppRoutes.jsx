import { HomePage } from "../Pages/Home/Home";
import { ShopPage } from "../Pages/Shop/Shop";
import { AllProducts } from "../Pages/Shop/Allproducts";
import { ProductDetails } from "../Product/ProductDetail";
import { JewelryProducts } from "../Pages/Shop/Jewelry";
import { Children } from "react";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    children: [
      { index: true, element: <AllProducts /> },
      { path: "allProducts", element: <AllProducts /> },
      { path: "Jewelry", element: <JewelryProducts /> },
    ],
  },
  {
    path: "/productDetails/:id",
    element: <ProductDetails />,
  },
];

export { routes };
