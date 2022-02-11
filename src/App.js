import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignInSide from './pages/Signin';
import SignUp from './pages/Signup';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignInSide />} />
      </Routes>
    </div>
  );
}

export default App;
