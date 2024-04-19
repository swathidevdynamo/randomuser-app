import React from 'react';
import { render, screen } from '@testing-library/react';
import ListPage from '../ListPage';
import { BrowserRouter } from "react-router-dom"


const MockList = () => {
    return (
        <BrowserRouter>
          <ListPage/>
        </BrowserRouter>
    )
}


describe("UsersList", () => {

    beforeEach(() => {
        // console.log("RUNS BEFORE EACH TEST")
        return jest.mock('../../__mocks__/fetch');
    })

    // beforeAll(() => {
    //     console.log("RUNS ONCE BEFORE ALL TESTS")
    // })

    // afterEach(() => {
    //     console.log("RUNS AFTER EACH TEST")
    // })

    // afterAll(() => {
    //     console.log("RUNS ONCE AFTER ALL TESTS")
    // })

    it('should fetch and render list ', async () => {
        render(
            <MockList />
        );
        const followerDivElement = await screen.findByTestId(`users_list`)
        expect(followerDivElement).toBeInTheDocument();
    });
})
