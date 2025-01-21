import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cae=se", ()=>{
    it("Should load contact us component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        // assertion
        expect(heading).toBeInTheDocument();
    })
    it("Should load button inside contact us component", ()=>{
        render(<Contact/>);
        const button = screen.getByText("Submit");
        // assertion
        expect(button).toBeInTheDocument();
    })
    test("Should load input inside contact us component", ()=>{
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        // assertion
        expect(inputName).toBeInTheDocument();
    })
    test("should load 2 input boxes on the contact component",()=>{
        render(<Contact/>);
        const inputBoxes= screen.getAllByRole("textbox");
    
        // Assertion
        expect(inputBoxes.length).toBe(2);
    
    })
})
