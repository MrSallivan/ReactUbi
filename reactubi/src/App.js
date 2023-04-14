import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 2, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 3, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 4, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 5, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
	])
	const [posts2, setPosts2] = useState([
		{ id: 1, title: 'Python', body: 'Python - this is programming Language' },
		{ id: 2, title: 'Python', body: 'Python - this is programming Language' },
		{ id: 3, title: 'Python', body: 'Python - this is programming Language' },
		{ id: 4, title: 'Python', body: 'Python - this is programming Language' },
		{ id: 5, title: 'Python', body: 'Python - this is programming Language' },
	])

	return (
		<div className='App'>
			<PostList posts={posts} title={'Post List from props'}/>
			<PostList posts={posts2} title={'Post List from Python'}/>
		</div>
	)
}

export default App