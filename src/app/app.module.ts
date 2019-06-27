import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation'


import { ToastrModule } from 'ngx-toastr';

import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { ProductmainComponent } from './products/productmain/productmain.component';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './User/user/user.component';
import { LoginComponent } from './User/user/login/login.component';
import { from } from 'rxjs';
import { RegistrationComponent } from './User/user/registration/registration.component';
import { UserService } from './User/Shared/user.service';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';

import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,

  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { MainComponent } from './main/main.component';
import { LoaderComponent } from './loader/loader.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ProductComponent,
    ProductListComponent,
    ProductmainComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    MainComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    ToastrModule.forRoot({progressBar:true,closeButton:true}),
    MaterialModule,MatSidenavModule,  MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
  
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,NgxPaginationModule
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],entryComponents:[ProductComponent]
})
export class AppModule {}
