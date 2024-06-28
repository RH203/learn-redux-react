import {createBrowserRouter} from "react-router-dom";
import _Layout from "../pages/_layout/_layout.jsx";
import {CartPage, CounterPage, HomePage} from "../pages/index.js";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <_Layout/>,
    children: [
      {
        path: "*",
        element: <p className={"flex justify-center items-center mt-80 text-5xl"}>Oops, wrong url?</p>
      },
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "counter-page",
        element: <CounterPage/>,
      },
      {
        path: "cart-page",
        element: <CartPage/>
      }

    ]

  }
])