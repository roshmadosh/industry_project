import './Home.scss'
import { NavLink } from 'react-router-dom'




const HomePage = () =>{

   return (
   <>
    <div className='hero'>
      <div className='hero__content'>
            <h1 className='hero__title'>Questionnaire</h1>
            <p className='hero__text'>Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover</p>
            <NavLink to='/Form1' className='hero__link' > <button className='hero__btn'>Get started</button> </NavLink>
      </div>
      <div className='hero__bg'></div>
   </div>
   </>

   )
}

export default HomePage;