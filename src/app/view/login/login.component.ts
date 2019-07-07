import { Component } from '@angular/core';
import { FirebaseAuthService } from '../../api/firebase-auth.service';
import { SumagroAppService } from '../../api/sumagro-app.service';        
import { Router } from '@angular/router';   

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    email:string;
    password:string;
    log:boolean;

    constructor(public fireBaseAuthService:FirebaseAuthService, public sumagroAppService:SumagroAppService, private router:Router){
        this.email="";
        this.password="";
        this.log=false;
    }

    
        async login(){
        
        let obj = {email:this.email, password:this.password};
        try{
            let response = await this.fireBaseAuthService.doLogin(obj);
            let token = await this.fireBaseAuthService.getToken();
            let metaData:any='';
            console.log("CONSIMIENDO SEVICIOS");
            let rol:any = await this.sumagroAppService.getInfo(token, response['user']['uid']);
            if(rol.rol=="CREDIT_COLLECTION"){
                this.router.navigate(["./tabla"]);
            }else{
                console.log("nel");
            }
        }catch(error){
                console.log('Error', error);
        }
    }
    



}