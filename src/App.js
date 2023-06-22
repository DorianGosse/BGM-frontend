import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

import Login from './Components/Pages/Login';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route exact path='/' element ={<Navigate to='/login'/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
