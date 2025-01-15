import React, {lazy, Suspense, useEffect} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestMenu from "./components/RestMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";

const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  const[UserInfo, setUserInfo]=useState();
  // authentication code written 

  useEffect(()=>{
    // make api and send username and pass
    const data={
      name:"Prachi",
    }
    setUserInfo(data.name);
  },[])

  return (
    <UserContext.Provider value={{loggedInUser:UserInfo, setUserInfo}}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    
  );
};

const appRouter =createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/restaurants/:resId",
        element: <Suspense fallback={<div>Loading...</div>}><RestMenu /></Suspense>,
      },

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
