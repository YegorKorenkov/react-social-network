import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
     users: [
    //     {
    //         id: 1,
    //         followed: true,
    //         photoUrl: 'https://i2.wp.com/www.movies.ie/wp-content/uploads/2019/12/thegentlemencolinfarrell2.jpg?fit=750%2C400',
    //         fullName: 'Dmitriy',
    //         status: "I'm a funny man",
    //         location: {
    //             city: 'Minsk',
    //             country: 'Belarus'
    //         }
    //     },
    //     {
    //         id: 2,
    //         followed: false,
    //         photoUrl: 'https://i2.wp.com/www.movies.ie/wp-content/uploads/2019/12/thegentlemencolinfarrell2.jpg?fit=750%2C400',
    //         fullName: 'Alex',
    //         status: "I'm a cool man",
    //         location: {
    //             city: 'Kiev',
    //             country: 'Ukraine'
    //         }
    //     },
    //     {
    //         id: 3,
    //         followed: true,
    //         photoUrl: 'https://i2.wp.com/www.movies.ie/wp-content/uploads/2019/12/thegentlemencolinfarrell2.jpg?fit=750%2C400',
    //         fullName: 'Serg',
    //         status: "I'm a good man",
    //         location: {
    //             city: 'Moscow',
    //             country: 'Russia'
    //         }
    //     },
         ],
         pageSize: 5,
         totalUsersCount: 10,
         currentPage: 1,
         isFetching: false,
         followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return { 
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
            
        case UNFOLLOW: {
            return { 
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
            
        default: return state;
    }
}

export default usersReducer;

export const followSuccess = (userId) => {
    return { type: FOLLOW, userId  }
}

export const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalCount = (totalCount) => {
    return { type: SET_TOTAL_COUNT, totalCount}
}

export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching}
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
    return { type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
    }   
}

export const follow = id => {
    return dispatch => {
        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.onFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleIsFollowingProgress(false, id))
        })
        }
}

export const unfollow = id => {
    return dispatch => {
        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.onUnfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleIsFollowingProgress(false, id))
        })
        }
}
