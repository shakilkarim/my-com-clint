import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from "./components/nav/Menu";
import AdminRoute from './components/routes/AdminRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import AdminCategory from './pages/admin/AdminCategory';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProduct from './pages/admin/AdminProduct';
import Products from './pages/admin/Products';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from "./pages/Home";
import Dashboard from './pages/user/Dashboard';
import UserOrders from './pages/user/UserOrders';
import UserProfile from './pages/user/UserProfile';


//Page not found if router url mistake than at section run
const PageNotFound = () => {
    return(
      <div className="d-flex justify-content-center align-items-center vh-100">
          <h1 className="text-danger">404 | Page Not found</h1>
        </div>
    )
}

function App() {
  return (
      <div>
        <BrowserRouter>
          <Menu></Menu>
          <Toaster></Toaster>
          <Routes>
              <Route path='/' element={<Home/>}>Home</Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>

              <Route path='/dashboard' element={<PrivateRoute></PrivateRoute>}>
                  <Route path='user' element={<Dashboard></Dashboard>}></Route>
                  <Route path='user/profile' element={<UserProfile></UserProfile>}></Route>
                  <Route path='user/orders' element={<UserOrders></UserOrders>}></Route>
              </Route>

              <Route path='/dashboard' element={<AdminRoute></AdminRoute>}>
                    <Route path='admin' element={<AdminDashboard></AdminDashboard>}></Route>
                    <Route path='admin/category' element={<AdminCategory></AdminCategory>}></Route>
                    <Route path='admin/product' element={<AdminProduct></AdminProduct>}></Route>
                    <Route path='admin/products' element={<Products></Products>}></Route>
              </Route>
              <Route path="*" element={<PageNotFound></PageNotFound>} replace></Route>
              
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
