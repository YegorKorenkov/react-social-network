import * as Axios from 'axios'


const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c944bd42-8b81-44cc-beac-57f0afef48ae"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`, {   
        }).then(response => {return response.data})
    },

    onFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },

    onUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },

    getProfile(userId) {
        return instance.get('profile/' + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

