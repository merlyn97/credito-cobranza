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
    totalRecords:number;
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
        this.totalRecords=0;
    }

      ngOnInit() {
    
    }

    async saveMoney(fila,columna){
        
        let input =  (<HTMLInputElement>document.getElementById(`${fila}-${columna}`)).value;
        let button:any=document.getElementById(`${fila}-MXN-${columna}`);
        button.disabled=true;

        this.Parcelas[fila][columna] = input;

           
            
            let token = await this.firebaseAuthService.getToken();
            let metaData = await this.firebaseAuthService.getMetadata();
            let userInfo:any = await this.sumagroAppService.getInfo(token,metaData.uid);
            let response = await this.sumagroAppService.updateRecord(token,fila+1,this.Parcelas[fila],userInfo.ingenioId);
           
        
        
    }

    async saveLumps(fila,columna){
        
        let button:any=document.getElementById(`${fila}-BULTOS-${columna}`);
        button.disabled=true;
        let input =  (<HTMLInputElement>document.getElementById(`${fila}-${columna}`)).value;
      
        this.Parcelas[fila][columna] = input;
        
         
            
            let token = await this.firebaseAuthService.getToken();
            let metaData = await this.firebaseAuthService.getMetadata();
            let userInfo:any = await this.sumagroAppService.getInfo(token,metaData.uid);
            let response = await this.sumagroAppService.updateRecord(token,fila+1,this.Parcelas[fila],userInfo.ingenioId);
         
        
    }

    async  mostrarTabla(){
       
        this.cargando=true;
        let token="";
        if(localStorage.getItem('token') == null){
             token= await this.firebaseAuthService.getToken();
             
        }else{
            token = localStorage.getItem('token');
        }   
            let metaData:any = await this.firebaseAuthService.getMetadata();
       
            let datosUsuarios:any =  await this.sumagroAppService.getInfo(token, metaData.uid);
            if(datosUsuarios.rol!="CREDIT_COLLECTION"){
                this.router.navigate(['/login'])
            }
            await this.sumagroAppService.getParcelas(token, datosUsuarios.ingenioId).subscribe((data:any)=>{
         
                for(let i=1; i<data.length; i++){
                    this.Parcelas.push(data[i]);
                    if((data[i][27]).toLowerCase()!="actualizando"){
                        this.totalRecords=this.totalRecords+1;
                    }
                }       
                this.cabeceras=data[0];
                this.cargando=false;
            }) 

    }



    logout(){
        this.firebaseAuthService.logout();
        
    }
    
}