import React, { useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';

function App() {

	const [value, setValue] = useState('Text in imput')



	return (
		<div className="App">
			<ClassCounter />
			<Counter />

		</div>
	);
}

export default App;
