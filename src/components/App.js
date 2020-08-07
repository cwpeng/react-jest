import React from "react";
class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let negativeList;
		if(this.props.data===null){
			negativeList=<li>No Data</li>;
		}else{
			negativeList=this.props.data.filter((number)=>{
				return number<0;
			}).map((number)=>{
				return <li>{number}</li>;
			});
		}
		return <>
			<h3>Unit Testing</h3>
			<main>Jest Snapshot Testing</main>
			<ul>{negativeList}</ul>
		</>;
	}
}
export default App;