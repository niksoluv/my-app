const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	posts: [
		{ id: '1', message: 'post  1', likesCount: '23' },
		{ id: '2', message: 'post 2', likesCount: '324' }
	],
	newPostText: 'new post text'
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let post = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.push(post)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer