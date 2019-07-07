import { Component, OnInit } from '@angular/core';
import { SumagroAppService } from 'src/app/api/sumagro-app.service';
import { FirebaseAuthService } from 'src/app/api/firebase-auth.service';
import { Router } from '@angular/router';

import { Prueba } from './prueba';
import { from } from 'rxjs';

@Component({
    selector: 'app.table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{
    cabeceras: any=[];
    public Parcelas:any=[];
  public cargando:boolean;
  public money:any;
  public lumps;
  public var;
  public padre;
  public contenido;

    constructor(private router:Router, public sumagroAppService:SumagroAppService, public firebaseAuthService:FirebaseAuthService){
        this.money=0;
        this.lumps=0;
        this.var = "id";
    }

      ngOnInit() {
    
    }

    saveMoney(index){
        console.log(index + this.money);
    }

    saveLumps(index){
        console.log(this.lumps);
    }

    async  mostrarTabla(){
        console.log('Muestra tabla');
        this.cargando=true;
        let token="";
        if(localStorage.getItem('token') == null){
             token= await this.firebaseAuthService.getToken();
         
        }else{
            token = localStorage.getItem('token');
        }   
            let metaData:any = await this.firebaseAuthService.getMetadata();
            console.log(metaData);
            let datosUsuarios:any =  await this.sumagroAppService.getInfo(token, metaData.uid);
            await this.sumagroAppService.getParcelas(token, datosUsuarios.ingenioId).subscribe((data:any)=>{
                console.log(JSON.stringify(data));
                for(let i=1; i<data.length; i++){
                    this.Parcelas.push(data[i]);
                }       
                this.cabeceras=data[0];
                this.cargando=false;
            }) 

    }



    logout(){
        this.firebaseAuthService.logout();
        
    }
    
}