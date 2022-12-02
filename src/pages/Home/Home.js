import './Home.scss'
import { NavLink } from 'react-router-dom'
import nyclogo from '../../Assetes/image/NYCC Logo.png'




const HomePage = () =>{

   return (
   <>
    <div className='hero'>
      <div className='hero__content'>
            <img className='nycLogo' src={nyclogo}></img>
            <h1 className='hero__title'>Questionnaire</h1>
            <p className='hero__text'>Complete this short questionnaire to get a free $15 food delivery app gift card of your choice! </p>
            <NavLink to='/Form1' className='hero__link' > <button className='hero__btn'>Get started</button> </NavLink>
      </div>
      <div className='home__bg'></div>
   </div>
   </>

   )
}

export default HomePage;