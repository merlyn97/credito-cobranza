import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SumagroAppService {


  endpoint = "http://localhost:5001/sumagro-backend/us-central1/app";
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'applicaton/json'
    })
  }


  constructor(private http:HttpClient) { }

  getInfo(token:string, uid:string){
      this.options.headers= new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':token
      })
      return new Promise((resolve,reject)=>{

      
      this.http.get(`${this.endpoint}/sumagro-app/user/${uid}`, this.options).subscribe(data=>resolve(data));//Poner url de vales
    });
    }

  getParcelas(token:string, ingenioId:string){
    console.log('entra vales');
    this.options.headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    })
    return this.http.get(`${this.endpoint}/sumagro-app/database/${ingenioId}`, this.options);
    }

    updateRecord(token,row,inputs,ingenioId){
      this.options.headers=new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
      let request = {
        row,
        inputs
      }
      console.log(request.inputs);
      return new Promise((resolve,reject)=>{
        this.http.put(`${this.endpoint}/sumagro-app/update-database/ingenio/${ingenioId}`,JSON.stringify(request),this.options
        ).subscribe(data=>resolve(data));
      })

    }

}
