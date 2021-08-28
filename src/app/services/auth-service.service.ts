import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  isAuthenticated() {
    const authData = JSON.parse(localStorage.getItem('authData')|| '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.token) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  gettoken() {
    const authData = JSON.parse(localStorage.getItem('authData')|| '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.token) {
        return authData.token
        return null
      }
    } else {
      return null
    }
  }


  getprofilecontrol() {
    const authData = JSON.parse(localStorage.getItem('authData')|| '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.userId) {
        return authData.userId
        return null
      }
    } else {
      return null
    }
  }

  updatecheacking() {
    const authData = JSON.parse(localStorage.getItem('authdatareset')|| '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.userId) {
        return authData.userId
        return null
      }
    } else {
      return null
    }
  }
  updatetoken() {
    const authData = JSON.parse(localStorage.getItem('authdatareset')|| '{}')
    // console.log(authData.token)
    if (authData) {
      if (authData.token) {
        return authData.token
        return null
      }
    } else {
      return null
    }
  }
}
