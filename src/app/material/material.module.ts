import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
const matir = [MatTableModule,
  MatButtonModule,
  MatPaginatorModule, 
  BrowserAnimationsModule,
  MatFormFieldModule,MatProgressSpinnerModule,
  MatInputModule, MatSortModule,MatIconModule,MatToolbarModule,MatProgressBarModule];
@NgModule({
  imports: [matir,MatDialogModule],
  exports: [matir]
})
export class MaterialModule { }
