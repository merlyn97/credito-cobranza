import { Component, ViewChild } from '@angular/core';
import { FirebaseAuthService } from '../../api/firebase-auth.service';
import { SumagroAppService } from '../../api/sumagro-app.service';        
import { Router } from '@angular/router';   
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    email:string;
    password:string;
    log:boolean;
    public loading = false;
    @ViewChild('errorAccess') private errorAccess: SwalComponent;

    constructor(public fireBaseAuthService:FirebaseAuthService, public sumagroAppService:SumagroAppService, private router:Router){
        this.email="";
        this.password="";
        this.log=false;
    }

    
        async login(){
        this.loading=true;
        let obj = {email:this.email, password:this.password};
        try{
            let response = await this.fireBaseAuthService.doLogin(obj);
            let token = await this.fireBaseAuthService.getToken();
            let rol:any = await this.sumagroAppService.getInfo(token, response['user']['uid']);
          
            if(rol.rol=="CREDIT_COLLECTION"){
                this.loading=false;
                this.router.navigate(["./tabla"]);
            }else{
                this.loading=false;
                this.errorAccess.show();
            }
        }catch(error){
            this.loading=false;
            this.errorAccess.show();
        }
    }
    



}