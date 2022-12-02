import './Form3.scss'
import { NavLink } from 'react-router-dom'
import arrownext from '../../Assetes/image/Vector.svg'
import arrowpre from '../../Assetes/image/pre.svg'
import nyclogo from '../../Assetes/image/NYCC Logo.png'




const Form3 = () =>{


   return (

   <div className='form'>
       <div className='hero3__bg'></div>
         <div className='form__container'>
         <img className='nycLogo' src={nyclogo}></img>
            <progress className='progrss-bar w3-container w3-round w3-blue' value="80" max="100"></progress>
                  <span className='progress__dot  progress__dot--active'></span>
                  <span className='progress__dot '></span>
                  <span className='progress__dot'></span>     
   {/* form3 */}
         <div id='form3'  className='form'> 
               <div className='form__content'> 
                        <h3 className='form__subtitle'>Question 3/3</h3>
                        <h1 className='form__main-title'>Housing Information</h1>
                        <label className='form__label--text'>How many roommates do you have?</label>
                   <div className='form__select'>
                          <div className='form__select--box'>   
                              <input type="radio"  className="select1" value="1"/>
                              <label>1</label>
                           </div> 
                           <div className='form__select--box'>    
                              <input type="radio"  name="select2" value="2"/>
                              <label>2</label>

                           </div>
                           <div className='form__select--box'>
                              <input type="radio"  name="select3" value="2"/>
                              <label>3</label>
                           </div>

                           <div className='form__select--box'>
                              <input type="radio"  name="select4" value="2"/>
                              <input className='form__select--input' type="text" name='amount' placeholder='Custom'/>
                           </div>
                  </div> 
                  <div className='form__btns'>
                  <NavLink to='/Form2'>
                     <button className='previous-btn'>Previous<img className='previous-btn--icon' src={arrowpre}/></button>
                  </NavLink>  
                  <NavLink to='/conclusion'> 
                     <button className='next-btn'>Next <img className='next-btn--icon' src={arrownext}/></button>
                  </NavLink>
                  </div>
             </div>
            
            <div/>
            
         </div>
         </div>
      </div>
   
   )
}

export default Form3;