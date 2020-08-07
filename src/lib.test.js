import {add, format} from "./lib.js";
test("Test Add Function", ()=>{
	expect(add(3,4)).toBe(7);
	expect(add(undefined,4)).toBeNaN();
	expect(add("7",8)).toBe(15);
});
test("Test Format Function", ()=>{
	expect(format(9)).toBe("09");
	expect(format(12)).toBe("12");
});