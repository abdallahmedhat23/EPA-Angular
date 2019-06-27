import { Injectable } from '@angular/core';
import { Product } from './product-model';
import {  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productmodel:Product;
  productlist:Product[];
  constructor(private  http:HttpClient) { }

uri="http://localhost:53345/api/Products"


addproduct(){
 return this.http.post(this.uri+"/PostProduct",this.productmodel);
}
getallproduct(){
 return this.http.get(this.uri+"/GetProducts");
}
 updateproduct(){
return this.http.put(this.uri+"/UpdateProduct?ProductID="+this.productmodel.ProductID,this.productmodel);
}
deletethis(id){
 return this.http.delete(this.uri+"/DeleteProduct?id="+id);
}
}
