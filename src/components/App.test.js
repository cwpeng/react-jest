import React from "react";
import renderer from "react-test-renderer";
import App from "./App.js";
test("Snapshot Testing for React Component", ()=>{
	const tree=renderer.create(<App/>).toJSON();
	expect(tree).toMatchSnapshot();
});