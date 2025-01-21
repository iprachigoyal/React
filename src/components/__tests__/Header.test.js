
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";


it("should load header component with a login button", ()=>{
    
    render(
        <BrowserRouter>
        <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button", {name:"Login"});
    // const loginButton=screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})
it("should load header component with cart item is there or not", ()=>{
    
    render(
        <BrowserRouter>
        <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );
    // const cartItems=screen.getByRole("button", {name:"Login"});
    const cartItems=screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})
it("should change login button to logout on click", ()=>{
    
    render(
        <BrowserRouter>
        <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton= screen.getByRole("button", {name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})