import axios from "axios";
test("Test API", ()=>{
	return axios.get("https://cwpeng.github.io/live-records-samples/data/products.json").then((response)=>{
		expect(response.data).toBeDefined();
		expect(response.data.length).toBeGreaterThan(0);
		expect(response.data[0]).toHaveProperty("name");
		expect(response.data[0]).toHaveProperty("price");
		expect(response.data[0]).toHaveProperty("description");
		expect(typeof response.data[0].price).toBe("number");
	});
});