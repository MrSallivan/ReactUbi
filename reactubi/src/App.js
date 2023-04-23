import React, { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 2, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 3, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 4, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
		{ id: 5, title: 'JavaScript', body: 'JavaScript - this is programming Language' },
	])

function addNewPost(){
	
}

	return (
		<div className='App'>
			<form>
				<MyInput  tepy='text' placeholder='Input post title'/>
				<MyInput  tepy='text' placeholder='Input post description'/>
				<MyButton onClick={addNewPost}>Creat post</MyButton>
			</form>
			<PostList posts={posts} title={'Post List from props'} />

		</div>
	)
}

export default App