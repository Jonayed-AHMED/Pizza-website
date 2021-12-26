import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<Router>
			<Topbar />
			<NavBar />
			<Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route exact path="/">
					<HomeScreen />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
