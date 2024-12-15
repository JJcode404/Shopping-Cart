import { HomePage } from "../Pages/Home/Home";
import { ShopPage } from "../Pages/Shop/Shop";
import { AllProducts } from "../Pages/Shop/Allproducts";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
    children: [
      //   { index: true, element: <DefaultProfile /> },
      { path: "allProducts", element: <AllProducts /> },
    ],
  },
];

export { routes };
