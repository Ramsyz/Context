import { useContext } from "react";
import { Context } from "./Store";

const CoolComponent = () => {
	const [state, setState] = useContext(Context);

	const handleClick = async () => {
		const person = await (
			await fetch("http://uinames.com/api/?ext")
		).json();

		console.log(person);
		setState(person);
	};
	return (
		<>
			<h2>I'm a Cool Component</h2>
			<p>Name: {state.name}</p>
			<p>Email: {state.email}</p>
			<button onClick={handleClick}>Click me</button>
		</>
	);
};

export default CoolComponent;
