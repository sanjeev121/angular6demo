import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddProduct } from '../index/AddProduct';
import { AddproductService } from '../../addproduct.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  addproduct: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private addproductservice: AddproductService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
            product: ['', Validators.required ],
            instock: ['', Validators.required ],
            ware_house: ['', Validators.required ]
            
         });
      }

    updateAddProduct(product, instock, ware_house) {
      this.route.params.subscribe(params => {
          this.addproductservice.updateAddProduct(product, instock, ware_house, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.addproductservice.editAddProduct(params['id']).subscribe(res => {
          this.addproduct = res;
      });
    });
  }
}
