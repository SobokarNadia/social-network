import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '93854a43-7e28-462a-b18c-260f0872e080'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const usersApi = {
  getUsers(pageNumberUsers, currentPage) {
    return instance.get(`users?count=${pageNumberUsers}&page=${currentPage}`
    ).then(response => response.data)
  },

  follow(id) {
    return instance.post(`follow/${id}`).then(response => response.data)
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },


}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data
    )
  },

  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response =>
        response.data
    )
  },
  updateProfileStatus(status){
    return instance.put('profile/status', {status})
  }
}

export const authAPI = {
  authMe() {
    return instance.get("auth/me")
        .then(response => response.data)
  },
  login(email, password, rememberMe,captcha){
    return instance.post('auth/login', {email, password, rememberMe, captcha})
        .then(response => {
              return response.data
            }
        )
  },
  logout(){
    return instance.delete('auth/login').then(response => response.data)
  },
  getCaptcha(){
    return instance.get('/security/get-captcha-url').then(response => response.data)
  }
}
