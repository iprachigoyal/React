import{fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body component with search button", async ()=>{
    await act(async()=>render(
    <BrowserRouter><Body/></BrowserRouter>))
    const cardsBeforeSearch=screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);
    const seacrhBtn= screen.getByRole("button",{name: "Search"} )
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "Republic"}});
    fireEvent.click(seacrhBtn);
    // expect(seacrhBtn).toBeInTheDocument();
    //screen should load 2 cards;
   const cards= screen.getAllByTestId("resCard");
   expect(cards.length).toBe(1);

})