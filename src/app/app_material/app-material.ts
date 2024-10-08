import { NgModule } from "@angular/core";
import {MatIconModule} from "@angular/material/icon"
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';  
import {MatExpansionModule} from '@angular/material/expansion'; 
@NgModule({
    imports:[
        MatIconModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatOptionModule,
        MatSelectModule,
        MatTooltipModule,
        MatTreeModule,
        MatExpansionModule

    ],
    exports:[
        MatIconModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatOptionModule,
        MatSelectModule,
        MatTooltipModule,
        MatTreeModule,
        MatExpansionModule
    ]
})

export class AppMaterialModule{}