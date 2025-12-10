
import { Routes ,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Features from './pages/Features'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import OtpVerification from './pages/OtpVerification'
import ResetPassword from './pages/ResetPassword'
function App() {
 
  return (
    <>
   <div className="min-h-screen w-full bg-black">


     <Routes>
       
        <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>} />
           <Route path="/OtpVerification" element={<OtpVerification/>}/>
            <Route path="/reset-password" element={<ResetPassword/>} />
        
      </Routes>
    </div>
   
      
    </>
  )
}

export default App
