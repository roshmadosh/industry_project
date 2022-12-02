import './Conclusion.scss'
import { NavLink } from 'react-router-dom'




const Conclusion = () => {

    return (
        <>
            <div className='conclusion'>
                <div className='conclusion__content'>
                    <div className='conclusion__square'>
                    </div>
                    <div className='conclusion__text'>
                    <p className='conclusion__title'>Thank you for your contribution!</p>
                    <p>Your reward will be sent to your email address.</p>
                    </div>
                    <NavLink to='/conclusion' className='conclusion__link' > <button className='conclusion__btn'>View Statistics</button> </NavLink>
                </div>
                <div className='conclusion__bg'></div>
            </div>
        </>

    )
}

export default Conclusion;