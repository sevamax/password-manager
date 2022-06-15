import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store  from './store';
// import {persister} from './store';
import App from './App';
import './index.css';
import './firebase';
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persister}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);