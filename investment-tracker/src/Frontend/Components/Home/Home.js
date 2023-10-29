import React, {useState} from 'react'
import './Home.css'
import Main from './Main'
import Stocks from './Stocks'
import Education from './Education'
import Home2 from '../../Components2/Home2'
import NavBar from '../Navbar/NavBar'



const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className='home'>
     {/* After removing this stocks Error gone  */}
      {isLoggedIn ? (
        <Home2></Home2>
      ) : (
        <>
          <NavBar/>
          <Main />
          <Stocks />
          <Education />
          
        </>
      )}
    </div>
  );
}
export default Home;