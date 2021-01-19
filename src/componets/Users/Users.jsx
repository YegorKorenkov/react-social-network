import React from 'react';
import { NavLink } from 'react-router-dom';
import './Users.css'


const Users = props => {
    
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div>
                { pages.map((page, key) => <span onClick={() => props.onPageChanged(page)} className={props.currentPage === page 
                    ? 'selectedPage' : ''} key={key}>{page}</span>)}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photoUrl ? u.photoUrl : "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"}/>
                            </NavLink>
                        </div>
                        <div>
                            
                            { u.followed 
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)    
                            }
                                
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick = {() => {
                                props.follow(u.id);
                            }
                            }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div> 
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;