import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';

import ProtectedRoutes from './components/protetedRoutes';
import Layout from './components/Layout';

import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <div className="app flex flex-col lg:flex-row min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <Layout />
                </ProtectedRoutes>
              }
            >
              <Route path="/" element={<h1>Dummy Home Page</h1>} />
              <Route path="/dummy" element={<h1>Dummy Page</h1>} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
