import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { expect } from "chai";
import App from "../App";

configure({ adapter: new Adapter() });

describe("<App/> Component", () => {
  it("renders a message", () => {
    const wrapper = shallow(<App />);
    const message = <p>Edit <code>src/App.js</code> and save to reload.</p>;
    expect(wrapper.contains(message)).to.be.true;
  });
});
