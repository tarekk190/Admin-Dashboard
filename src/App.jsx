import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Team from "./Components/Team/Team";
import Contacts from "./Components/Contacts/Contacts";
import Invoices from "./Components/Invoices/Invoices";
import Form from "./Components/Form/Form";
import Faq from "./Components/FAQ/Faq";
import Pie from "./Components/Pie/Pie";
import Line from "./Components/Line/Line";
import Geography from "./Components/Geography/Geography";
import SideBar from "./Components/SideBar/SideBar";
import Calender from "./Components/Calender/Calender";
import BarChart from "./Components/BarChart/BarChart";
import "./index.css";


function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <SideBar />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/team", element: <Team /> },
        { path: "/contacts", element: <Contacts /> },
        { path: "/invoices", element: <Invoices /> },
        { path: "/form", element: <Form /> },
        { path: "/calender", element: <Calender /> },
        { path: "/faq", element: <Faq /> },
        { path: "/bar", element: <BarChart /> },
        { path: "/pie", element: <Pie /> },
        { path: "/line", element: <Line /> },
        { path: "/geography", element: <Geography /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
