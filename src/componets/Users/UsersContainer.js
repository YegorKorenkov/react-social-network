import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage, getUsers, follow, unfollow } from '../../redux/users-reducer'
import Users from './Users'
import './Users.css'
import Preloader from '../Common/Preloader/Preloader'

export class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
        
    }
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.onSetUsers(data.items);
        //     this.props.onSetTotalCount(data.totalCount)
        // })

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = pageNumber => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.onSetCurrentPage(pageNumber)
        
    }
    
    render () {
        
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null}
                <Users 
                onPageChanged={this.onPageChanged}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                followingInProgress = {this.props.followingInProgress}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                />
            </>
        )
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = dispatch => {
//     return {
//         onFollow: userId => {
//             dispatch(followAC(userId))
//         },
//         onUnfollow: userId => {
//             dispatch(unfollowAC(userId))
//         },
//         onSetUsers: users => {
//             dispatch(setUsersAC(users))
//         },
//         onSetCurrentPage: pageNumber => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         onSetTotalCount: count => {
//             dispatch(setTotalCountAC(count))
//         },
//         toggleIsFetching: isFetching => {
//             dispatch(setIsFetching(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    onSetCurrentPage: setCurrentPage,
    getUsers: getUsers,
    follow: follow,
    unfollow: unfollow
})(UsersContainer);
