import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: '1', message: 'post  1', likesCount: '23' },
				{ id: '2', message: 'post 2', likesCount: '324' } 
			],
			newPostText: 'new post text'
		},
		dialogsPage: {
			messages: [
				{ id: '1', message: 'hi' },
				{ id: '2', message: 'hello' },
				{ id: '3', message: 'how are u' },
				{ id: '4', message: 'hhehheeheheheheh' }
			],
			dialogs: [
				{ id: '1', name: 'Ya' },
				{ id: '2', name: 'Vitya' },
				{ id: '3', name: 'Andrey' },
				{ id: '4', name: 'Oleh' },
				{ id: '5', name: 'Ivan' }
			],
			newMessageBody: ''
		},
		sidebar: {}
	}, 
	_callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	}
}

export default store
window.store = store