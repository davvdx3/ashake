
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
      order: [{
        id: 1,
        name: "Eba",
        qty: 1,
        price: 1500,
        image: require("./images/1.jpg")
      }],
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
