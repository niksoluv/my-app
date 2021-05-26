import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
	return <div className={s.dialogs}>
		<div className={s.dialogsItems}>
			<div className={s.dialog + ' ' + s.active}>
				<NavLink to='/dialogs/1'>Ya</NavLink>
			</div>
			<div className={s.dialog}>
			<NavLink to='/dialogs/2'>Vitya</NavLink>
			</div>
			<div className={s.dialog}>
				<NavLink to='/dialogs/3'>Andrey</NavLink>
			</div>
			<div className={s.dialog}>
				<NavLink to='/dialogs/4'>Oleh</NavLink>
			</div>
			<div className={s.dialog}>
				<NavLink to='/dialogs/5'>Ivan</NavLink>
			</div>
		</div>
		<div className={s.messages}>
		<div className={s.message}>hii</div>
		<div className={s.message}>hello</div>
		<div className={s.message}>bye</div>
		</div>
	</div>
}

export default Dialogs;