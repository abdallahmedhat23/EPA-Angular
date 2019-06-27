import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../shared/product.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Product } from '../shared/product-model';
import { error } from '@angular/compiler/src/util';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
recivedrow;
  constructor(private proservice: ProductService, private toaster: ToastrService, 
    public dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { this.proservice.productmodel=data;
      //this.recivedrow=data;
    }

  ngOnInit() {
   if(this.proservice.productmodel.ProductID==null){
     this.create=true;
   }else{
     this.update=true;
   }
   

  }
  restform() {
    this.proservice.productmodel = {
      ProductID: null,
      ProductName: '',
      ProductPeice: null
    }
  }
  showspanner=false;
  onsubmit() {
    if (this.proservice.productmodel.ProductID == null) {
      this.SaveNewRecord();
    }
    else {
      this.UpdateExistingRecord()
    }

  }
  create=false;
  update=false;
 
onSubmit(myform :NgForm){
    if(myform.value.ProductID==null){
     this.SaveNewRecord();
    }
     else {
     this.UpdateExistingRecord()
     }
   }
  SaveNewRecord() {

    this.showspanner=true;
    this.proservice.addproduct().subscribe(res => {
      this.restform();
      this.toaster.success("new product successfully aded","ADD NEW PRODUCT")
      this.showspanner=false;
    },
   ()=>{
    this.showspanner=false;
    });
  }

  UpdateExistingRecord() {
    this.showspanner=true;
    this.proservice.updateproduct().subscribe(res => {
      this.toaster.warning("updated done successfully", "update product");
      this.restform();
    }, error => {
  
    },()=>{
      this.showspanner=false;
    });
  }

  //مبتعملش حاجه علشان تهاندل بعد القفل
  onClose() {
    this.dialogRef.close()
    this.dialogRef.afterClosed().subscribe(a => {
      
    })
  }


}
