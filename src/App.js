import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';

// redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// redux
const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;