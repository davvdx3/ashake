
import { Route, Routes } from 'react-router-dom';
import './App.css';
import reducerReducer from "./Reducer";
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Home from './Components/Home';
import Order from './Components/Order';


function App() {

  const store = configureStore({
    reducer: {
      reducer: reducerReducer
    }
  })

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/order'
          element={<Order />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
