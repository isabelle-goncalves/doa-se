import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import store from './store';
import { SettingsProvider } from './context/SettingsContext';
import { getSettings } from './utils/settings';

const settings = getSettings();

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <App />
      </SettingsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
