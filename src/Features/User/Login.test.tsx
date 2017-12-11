import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() }); 

import * as React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

describe("Login", () => {
    it("renders the header", () => {
        const result = shallow(<Login />).contains(<div className="header--login"/>);
        expect(result).toBe(true); 
    });
})