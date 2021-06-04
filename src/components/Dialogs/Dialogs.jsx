import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
	let state = props.dialogsPage
	const dialogsItems = state.dialogs.map((el) => {
		return <DialogItem key={el.id.toString()} name={el.name} id={el.id} />
	})
	const messagesItems = state.messages.map((el) => {
		return <Message key={el.id.toString()} message={el.message} />
	})
	const newMessageBody = state.newMessageBody

	const onSendMessageClick = () => {
		props.sendMessage()
	}
	const onNewMessageChange = (e) => {
		let body = e.target.value
		props.updateNewMessageBody(body)
	}

	return <div className={s.dialogs}>
		<div className={s.dialogsItems}>
			{dialogsItems}
		</div>
		<div className={s.messages}>
			{messagesItems}
		</div>
		<div>
			<textarea
				placeholder='Message...'
				value={newMessageBody}
				onChange={onNewMessageChange}></textarea>
		</div>
		<div>
			<button onClick={onSendMessageClick}>Send</button>
		</div>
	</div>
}

export default Dialogs;