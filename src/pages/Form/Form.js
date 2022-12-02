import './Form.scss'
import { NavLink } from 'react-router-dom'




const Form = () =>{


   return (

   <div className='form'>
       <div className='hero__bg'></div>
         <div className='form__container'>
            <progress className='progrss-bar' value="33" max="100"></progress>
                  <span className='progress__dot  progress__dot--active'></span>
                  <span className='progress__dot '></span>
                  <span className='progress__dot'></span>     
            {/* form1 */}
            <div id='form1'  className='form'> 
                  
            <div className='form__content'> 
                  <h3 className='form__subtitle'>Question 1/3</h3>
                  <h1 className='form__main-title'>Enter your information</h1>
               <div className='form__box'>
                  <div className='form__name'>
                     <label className='form__label'>Name</label>
                        <div className='form__name--boxs'>
                        <input type="text" className='form__name--input1' name='middle_name' placeholder='First Name'/>
                           <input type="text" className='form__name--input2' name='middle_name' placeholder='M.I'/>
                           <input type="text" className='form__name--input3' name='last_name' placeholder='Last Name'/>
                     </div>
                   </div>  

                     <div className='form__adress'>
                        <label className='form__label'>Adress</label>
                           <div className='form__adress--box'>
                              <input type="text" className='form__adress--input1' name='first_name' placeholder='i.e. John Doe'/>
                              <input type="text" className='form__adress--input2' name='first_name' placeholder='Apt. #'/>
                           </div>
                     </div>

                     <div className='form__info'>
                        <div className='form__tel'>
                          <label className='form__label'>Phone</label>
                          <input type="text" className='form__tel--input' name='tel' placeholder='(+1)'/>
                        </div>
                           <div className='form__birthday'>
                           <label className='form__label'>Date of Birth</label>
                              <input type="date" className='form__adress--input2' name='first_name' placeholder='First Name'/>
                           </div>
                        </div> 
                        <button className='next-btn'>Next</button>
                     </div>
            </div>
         
         </div>
   {/* form3 */}
         <div id='form3'  className='form'> 
               <div className='form__content'> 
                        <h3 className='form__subtitle'>Question 3/3</h3>
                        <h1 className='form__main-title'>Housing Information</h1>
                        <label className='form__label'>How many bathrooms are in your apartment?</label>
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
                              <input type="text" name='amount'/>
                           </div>
                  </div>  

                  <div className='form__rent'>
                     <label className='form__label'>Monthly Rent</label>
                     <input type="text" className='form__month--input' name='tel' placeholder='$ 55.66'/>
                  </div>


                  <div className='form__btns'>
                     <button className='previous-btn'>Previous</button>
                     <button className='next-btn'>Next</button>
                  </div>
               </div>
               
            
               
            
            
            <div/>
            
         </div>
         </div>
      </div>
   
   
   )
}

export default Form;