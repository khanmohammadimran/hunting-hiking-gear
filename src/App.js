import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home';
import Blog from './Pages/Blog/Blog';
import Equipments from './Pages/Equipments/Equipments';
import MyItems from './Pages/MyItems/MyItems';
import AddItems from './Pages/AddItems/AddItems';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Notfound from './Pages/NotFound/Notfound';
import EquipmentDetail from './Pages/EquipmentDetail/EquipmentDetail';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/equipment/:equipmentId' element={<RequireAuth>
          <EquipmentDetail></EquipmentDetail>
        </RequireAuth>}></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/equipments' element={<RequireAuth>
          <Equipments></Equipments>
        </RequireAuth>}></Route>

        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>

        <Route path='/additems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
