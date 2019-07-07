import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';


export const firebaseConfig = {
  apiKey: "AIzaSyD5DCPHsQRgQExi3730nnMsh6f9eq6938c",
  authDomain: "sumagro-backend.firebaseapp.com",
  databaseURL: "https://sumagro-backend.firebaseio.com",
  projectId: "sumagro-backend",
  storageBucket: "sumagro-backend.appspot.com",
  messagingSenderId: "1016153454511",
  appId: "1:1016153454511:web:abf34f21acd8dcc0"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
