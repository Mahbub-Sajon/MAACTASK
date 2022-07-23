import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignIn from './Pages/SignIn/SignIn';
import Footer from './Pages/Components/Footer/Footer';


function App() {
  return (
    <div className='App'>
    
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
     </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
