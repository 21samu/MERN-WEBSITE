import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import Pagenotfound from './Pages/Pagenotfound';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
// import Privateroute from './Component/Layout/Routes/Private'
import Dashboard from './Pages/user/Dashboard';
import ForgotPasssword from './Pages/Auth/ForgotPassword';
import AdminRoute from "./Component/ROUTE/AdminRoute";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import PrivateRoute from './Component/ROUTE/AdminRoute';
import Users from './Pages/Admin/Users';
import CreateCategory from './Pages/Admin/CreateCategory';
import CreateProduct from './Pages/Admin/CreateProduct';
import Orders from './Pages/user/Order';
import Profile from './Pages/user/Profile';
import Products from './Pages/Admin/Product';
import UpdateProduct from './Pages/Admin/UpdateProduct';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import CartPage from './Pages/CartPage';
import AdminOrders from './Pages/Admin/AdminOrder';

function App() {
  return (
<>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/product/:slug' element={<ProductDetails/>}/>
<Route path='/categories' element={<Categories/>}/>
<Route path='/cart' element={<CartPage/>}/>
<Route path='/category/:slug' element={<CategoryProduct/>}/>
<Route path='/search' element={<Search/>}/>
  <Route path='/dashboard' element={<PrivateRoute/>}>
  <Route path='user'element={<Dashboard/>}/>
  <Route path="user/order" element={<Orders />} />
  <Route path="user/profile" element={<Profile />} />
  </Route>

  <Route path="/dashboard" element={<AdminRoute/>}>
  <Route path="admin" element={<AdminDashboard />} />
  <Route path="admin/create-category" element={<CreateCategory />} />
  <Route path="admin/create-product" element={<CreateProduct />} />
  <Route path="admin/product/:slug" element={<UpdateProduct />} />
  <Route path="admin/products" element={<Products />} />
  <Route path="admin/users" element={<Users />} />
  <Route path="admin/order" element={<AdminOrders/>} />
  </Route>

  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='policy' element={<Policy/>}/>
  <Route path='*' element={<Pagenotfound/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/Forgot-password' element={<ForgotPasssword/>}/>
</Routes>
</>
  );
}

export default App;
