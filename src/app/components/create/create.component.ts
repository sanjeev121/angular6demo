import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddproductService } from '../../addproduct.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  angForm: FormGroup;

  constructor(private addproductservice:AddproductService,private fb:FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      product: ['', Validators.required ],
      instock: ['', Validators.required ],
      ware_house:['', Validators.required]
      
   });

  }

  addAddProduct(product,instock, ware_house) {
    this.addproductservice.addAddProduct(product,instock,ware_house);
}
  ngOnInit() {
  }

}
