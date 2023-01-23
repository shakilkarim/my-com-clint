import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Menu from "./components/nav/Menu";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from "./pages/Home";


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
              <Route path="*" element={<PageNotFound></PageNotFound>} replace></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
