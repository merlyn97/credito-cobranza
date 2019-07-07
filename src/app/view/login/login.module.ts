import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes = [
    {
        path: '',
        component: LoginComponent,
        children:[]
    }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
    exports: [LoginComponent]
})

export class LoginModule{}

