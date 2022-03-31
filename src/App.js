import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './component/nav/add-user/AddUser';
import Nav from './component/nav/Nav';
import ProductList from './component/nav/product-list/ProductList';
import Product from './component/nav/product/Product';
import UserList from './component/nav/user-list/UserList';
import Login from './Login';

function App() {
  const {user} = useAuth0()
  return (
    <div className="App">
      {!user?<Login/>:   
      <BrowserRouter>
         <Nav/>
         <Routes>
            <Route path='/' element={<AddUser/>}></Route>
            <Route path='/user-list' element={<UserList/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product-list' element={<ProductList/>}></Route>
         </Routes>
      </BrowserRouter>}
   
    </div>
  );
}

export default App;
