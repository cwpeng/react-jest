import App from "./App.js";
import React from "react";
import renderer from "react-test-renderer";

test("Test App Component", ()=>{
	let tree=renderer.create(<App data={[3,-2,5,-1]} />).toJSON();
	expect(tree).toMatchSnapshot();

	tree=renderer.create(<App data={[3,-2,0,-1]} />).toJSON();
	expect(tree).toMatchSnapshot();

	tree=renderer.create(<App data={[]} />).toJSON();
	expect(tree).toMatchSnapshot();

	tree=renderer.create(<App data={null} />).toJSON();
	expect(tree).toMatchSnapshot();
});