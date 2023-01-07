import avatar from '../../images/avatar.svg';
import Rectangle from '../../images/Rectangle.svg';
// import css from './Profile.css';
import css from './Profile.module.css'
import { useState, useEffect } from 'react';


const Profile = props => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        console.log('click');
	setFormVisible(!isFormVisible)
    }

    return(
<div className={css.profile__menu}  onClick={handleClick}>
                <div className={css.profile__menu_wrapper}>
                <img src={avatar} alt="avatar"  className={css.profile__avatar}/>
                <div className={isFormVisible ? css.icon + ' ' + css.isopen : css.icon} />
                </div>
				

                {isFormVisible &&
                <div className={css.profile_background} setFormVisible={isFormVisible} >
                <button className={css.profile_btn} >Profile</button>
                <button className={css.profile_btn}  >Log Out</button>
                <img src={Rectangle} alt='just a little styling thing' className={css.profile_background_little}/>


            </div>
                }
                
            
                 
</div>
    )
}



export default Profile;