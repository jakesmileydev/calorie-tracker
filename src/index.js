import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './style.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
