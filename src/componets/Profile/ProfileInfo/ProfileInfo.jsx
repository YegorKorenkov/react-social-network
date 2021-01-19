import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import './ProfileInfo.css'


const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader />
    }

    

    return (
        <div>
            <div>
                <img className="profile_image" src={"https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"} alt="Main"/>
                <div className="description_block">
                    <img src={props.profile.photos.large} />
                </div>
                <div className='about'>{props.profile.aboutMe}</div>
                <span className="name">{props.profile.fullName}</span>
                <div className='contacts'>
                    <ul className='contacts-list'>

                        { Object.entries( props.profile.contacts).map((item, key) => (
                            <li className='contacts-item' key={key}>
                                <a href={item[1]}>{item[0]}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='job'>
                    <div>
                        Поиск работы: 
                        { props.profile.lookingForAJob 
                            ? <img src='https://cdn1.iconfinder.com/data/icons/big-business/512/Thumb_Up-512.png' />
                            : <img src='https://n7.nextpng.com/sticker-png/360/748/sticker-png-facebook-dislike-illustration-social-media-facebook-like-button-facebook-dislike-blue-angle-text-rectangle.png'/>
                        }
                    </div>
                    <div className='job-description'>
                       Подпись: {props.profile.lookingForAJobDescription}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;