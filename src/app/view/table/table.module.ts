import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes = [
    {
        path: '',
        component: TableComponent,
        children: []
    }
];

@NgModule({
    declarations: [TableComponent],
    imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
    exports: [TableComponent]
})

export class TableModule{}