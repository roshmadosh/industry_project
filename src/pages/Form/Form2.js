import './Form2.scss'
import { NavLink } from 'react-router-dom'
import arrownext from '../../Assetes/image/Vector.svg'
import arrowpre from '../../Assetes/image/pre.svg'
import nyclogo from '../../Assetes/image/NYCC Logo.png'



const Form2 = () =>{


    return (
 
    <div className='form'>
        <div className='hero2__bg'></div>
          <div className='form__container'>
          <img className='nycLogo' src={nyclogo}></img>
             <progress className='progrss-bar w3-container w3-round w3-blue' value="50" max="100"></progress>
                   <span className='progress__dot  progress__dot--active'></span>
                   <span className='progress__dot '></span>
                   <span className='progress__dot'></span>     
        
    {/* form2 */}
          <div id='form3'  className='form'> 
                <div className='form2__content'> 
                         <h3 className='form__subtitle'>Question 2/3</h3>
                         <h1 className='form__main-title'>Salary Information</h1>
                         <label className='form__label--text'>How many roommates do you have?</label>
                    <div className='form__rent'>
                      <label className='form__label'>Yearly Salary</label>
                      <input type="text" className='form__month--input' name='tel' placeholder='$ 555.66'/>
                   </div>
 
                   <div className='form__rent'>
                      <label className='form__label'>Monthly Rent</label>
                      <input type="text" className='form__month--input' name='tel' placeholder='$ 555.66'/>
                   </div>

                   <div className='form__btns'>
                   <NavLink to='/Form1'>
                      <button className='previous-btn'>Previous<img className='previous-btn--icon' src={arrowpre}/></button>
                    </NavLink>
                    <NavLink to='/Form3'>  
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
 
 export default Form2;