import './Form.scss'
import { NavLink } from 'react-router-dom'




const Form1 = () =>{

   return (
    
    <div className='progress'>
     <div className='progress__bar'>
        <span className='progress__dot  progress__dot--active'></span>
        <span className='progress__dot '></span>
        <span className='progress__dot'></span>
     </div>
     {/* form  */}
     <div className='form__container'> 
      <div className='form__title'> 
        <h3 className='form__subtitle'>Question 1/3</h3>
        <h1 className='form__main-title'>Enter your information</h1>

        <div className='form__name'>
            <label className='form__name'>Name</label>
             <div className='form__name--inputs'>
               <input className='form__name--input'></input>
             </div>
        </div>


      </div>

     
    </div>
   </div>

   )
}

export default Form1;