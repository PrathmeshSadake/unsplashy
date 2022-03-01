import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className='App'>
      <UserAuthContextProvider>
      <Routes>
        <Route path='/home' element={<><Navbar/><Homepage /></>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Signin />} />x
      </Routes>

      </UserAuthContextProvider>
      
    </div>
  );
}

export default App;
