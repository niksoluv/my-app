import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App(props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<NavBar />
				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <DialogsContainer
						store={props.store} />} />
					<Route path='/profile'
						render={() => <Profile store={props.store} />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
