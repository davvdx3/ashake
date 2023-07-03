
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Reducer from './Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './Components/Home';
import Order from './Components/Order';


function App() {

  const store = createStore(Reducer,
    {
      order: [],
      plate: 0
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
