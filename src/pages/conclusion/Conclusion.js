import './Conclusion.scss'
import { NavLink } from 'react-router-dom'
import check from '../../Assetes/image/Check Mark.png'
import two from '../../Assetes/image/number72.png'



const Conclusion = () => {

    return (
        <>
            <div className='conclusion'>
                <div className='conclusion__content'>
                    <img className='conclusion__check' src={check} />
                    <div className='conclusion__text'>
                        <p className='conclusion__title'>Thank you for your contribution!</p>
                        <p>Your choice of a food delivery app giftcard will</p>
                        <p>be sent to your email!</p>
                        <p className='conclusion__inputTitle'>Enter your email</p>
                            <input type="tel" className='conclusion__input' placeholder="          example@email.com" />
                        <NavLink to='/conclusion' className='conclusion__link' > <button className='conclusion__btn'>Confirm</button> </NavLink>
                    </div>
                </div>

                <div className='conclusion__content2'>
                    <img className='conclusion__number' src={two} />
                    <div className='conclusion__text2'>
                        <p className='conclusion__title'>You are in the 72nd percentile of salary in your area!</p>
                        <p>Want to know housing information about your</p>
                        <p>neighborhood? Click below!</p>
                        <NavLink to='/conclusion' className='conclusion__link' > <button className='conclusion__btn2'>View Statistics</button> </NavLink>
                    </div>
                </div>
                <div className='conclusion__bg'></div>
            </div>
        </>

    )
}

export default Conclusion;