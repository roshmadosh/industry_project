import './Home.scss'
import { NavLink } from 'react-router-dom'




const HomePage = () =>{

   return (
    <>
    <div className='hero'>
         <h1 className='hero__title'>Questionnaire</h1>
         <p>Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover</p>
         <NavLink to='/Form1' className='hero_link' > <button className='hero_btn'>Get started</button> </NavLink>
   </div>
    </>

   )
}

export default HomePage;