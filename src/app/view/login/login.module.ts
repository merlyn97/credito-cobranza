import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxLoadingModule } from 'ngx-loading';
const routes = [
    {
        path: '',
        component: LoginComponent,
        children:[]
    }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [FormsModule, CommonModule,NgxLoadingModule.forRoot({}),SweetAlert2Module.forRoot(), RouterModule.forChild(routes)],
    exports: [LoginComponent]
})

export class LoginModule{}

