import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        CdkTableModule,
        MatTableModule,
        MatAutocompleteModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDialogModule
    ], exports: [
        MatSelectModule,
        CdkTableModule,
        MatTableModule,
        MatAutocompleteModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDialogModule
    ],
    entryComponents: []
})

export class AngularModule { }
