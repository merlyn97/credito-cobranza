import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { resolve, reject } from 'q';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(public angularFireAuth: AngularFireAuth, private router:Router) { }

  doLogin(value){
    return new Promise<any>((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res=>{
          localStorage.setItem('token', res['user']['refreshToken'])
          resolve(res)},
        err=>reject(err))
    })
  }

  getToken(){
    return new Promise<any>((resolve, reject)=>{
      firebase.auth().currentUser.getIdToken()
      .then(
        res=>
        {
          localStorage.setItem('token', res);
          resolve(res)
        },
        err=>reject(err))
    })
  }

  onAuthenticated(){
    return (localStorage.getItem('token')!=null);
  }

  logout(){
    firebase.auth().signOut();
    localStorage.clear();
    this.router.navigate(['./login']);
  }

  getMetadata(){
    return firebase.auth().currentUser; 
  }
  
}
