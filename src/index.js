import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Quiz from "./Quiz";
import Triangle from "./Triangle";
import Hypotenuse from "./Hypotenuse";
import Areaoftriangle from "./Areaoftriangle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Quiz />,
  },
  {
    path: "/Triangle",
    element: <Triangle />,
  },
  {
    path: "/Hypotenuse",
    element: <Hypotenuse />,
  },
  {
    path: "/Areaoftriangle",
    element: <Areaoftriangle />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <div className="Header-one">
        <h1>Fun With Triangles...</h1>
        <ul>
          <a href="/Triangle">
            <li>Is Traingle?</li>
          </a>
          <a href="/">
            <li>Quiz</li>
          </a>
          <a href="/Hypotenuse">
            <li>Hypotenuse</li>
          </a>
          <a href="/Areaoftriangle">
            <li>Area of Triangle</li>
          </a>
        </ul>
      </div>
      <div className="components">
        <RouterProvider router={Approuter} />
      </div>
      <div className="footer"></div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
