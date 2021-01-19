import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import './Profile.css';
import {connect} from 'react-redux'
import {getUserProfile} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) userId = 2;
        this.props.getUserProfile(userId)
    }
    

    render () {
        return (
            <div className='profile_wrapper'>
    
              <ProfileInfo profile={this.props.profile} />
              <MyPostsContainer />
    
            </div>
        );
    }
    
};

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
    profile: state.profilePage.profile   
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent)