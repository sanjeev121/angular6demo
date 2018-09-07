
import { Component, OnInit } from '@angular/core';
import { AddProduct } from './AddProduct';
import { AddproductService } from '../../addproduct.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  addproducts: AddProduct[];

  constructor(private addproductservice: AddproductService) { }

  ngOnInit() {
    this.addproductservice
      .getAddProducts()
      .subscribe((data: AddProduct[]) => {
      this.addproducts = data;
    });
  }
  deleteAddUser(id) {
    this.addproductservice.deleteAddProduct(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}

