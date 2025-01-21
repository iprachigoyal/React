import {act }from "react";
import {render, screen} from "@testing-library/react"
import RestMenu from "../RestMenu"
import MOCK_DATA from "../mocks/mockResMenu,json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
}

)

it("should load rest menu component", async ()=>{
    await act(async ()=> render (<RestMenu/>));
    const accordianHeader=screen.getByText("Recommended");
})