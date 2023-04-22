import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 2, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 3, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 4, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 5, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
	])


	return (
		<div className='App'>
			<form>
				<input type='text' placeholder='Name post' />
				<input type='text' placeholder='Description post' />
				<MyButton>Button text</MyButton>
			</form>
			<PostList posts={posts} title={'Post List from props'} />

		</div>
	)
}

export default App