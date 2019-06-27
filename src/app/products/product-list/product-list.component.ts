import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/product.service';

import { Product } from '../shared/product-model';
import { ToastrService } from 'ngx-toastr';

import { MatSort, MatDialog } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['ProductName', 'ProductPeice', 'edit', 'Button'];

  dataSource;
  showspanner: boolean = false;
  constructor(private proserv: ProductService, private toastr: ToastrService, private dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {

    this.proserv.getallproduct().subscribe(data => {
      this.dataSource = new MatTableDataSource<Product>(data as Product[]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  asdload = false;
  populate(clicedmodel: Product) {
    this.proserv.productmodel = clicedmodel;
  }

  delete(id) {
    if (confirm("are you shore to delate this record")) {

      this.proserv.deletethis(id).subscribe(res => {
        this.proserv.getallproduct().subscribe(data => {
          this.showspanner = true;
          this.dataSource = new MatTableDataSource<Product>(data as Product[]);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.showspanner = false;
          this.toastr.warning("product removed succssfully!!","Rmoving Product");
        });
       
      }, error => {
        this.toastr.error(error);
        this.proserv.getallproduct();
      }, () => { this.showspanner = false; })
    }
  }

  pupupsavenew():
    void {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '500px', height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

      this.proserv.getallproduct().subscribe(data => {
        this.dataSource = new MatTableDataSource<Product>(data as Product[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
  datacomes;
  passdata(row) {
    this.datacomes = row;
  }
  pupedit(): void {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '500px', height: '500px',
      data: {
        ProductID: this.datacomes.ProductID, ProductName: this.datacomes.ProductName, ProductPeice: this.datacomes.ProductPeice

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.proserv.getallproduct().subscribe(data => {
        this.dataSource = new MatTableDataSource<Product>(data as Product[]);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

}



