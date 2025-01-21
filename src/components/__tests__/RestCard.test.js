import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import RestCard from "../RestCard";


it("should render RestCard with props Data", ()=>{
    render(
        <RestCard resData={MOCK_DATA} />)
        const name = screen.getByText("Chinese Wok");
        expect(name).toBeInTheDocument();

})