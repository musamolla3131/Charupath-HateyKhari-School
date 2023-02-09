/* eslint-disable no-unused-vars */
import { createRoot } from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import { store } from 'store';

// style + assets
import 'assets/scss/style.scss';
import config from './config';
import UserContext from 'Context/UserContext';
import App from 'App';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <UserContext>
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>
        </UserContext>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
