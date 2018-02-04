import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAdminService } from '../adminShared/product-admin.service';
import { Product } from '../adminShared/product';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'product-menu',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    

    imgTitle: string;
    imageSRC: string;
    name: string;
    description: string;
    price: number;
    product: Product;
    addProduct: FormGroup;

    constructor(private fb:FormBuilder ,private prodAdminSVC: ProductAdminService, private router: Router, private toastr: ToastsManager) { }
    
    ngOnInit(): void {
        this.addProduct = this.fb.group({
            prodDesc: ['', [Validators.required]],
            prodPrice: ['', [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]],
            prodName: ['', [Validators.required]]
        })
    }

    fileLoad($event: any) {
        let myReader: FileReader = new FileReader();
        let file: File = $event.target.files[0];
        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
            this.imageSRC = e.target.result;
        }

    }

    createProduct(form: FormGroup) {
        const {prodDesc, prodPrice, prodName} = form.value
        if (!this.imgTitle || !this.imageSRC) {
            this.toastr.error("Please add image")
            return;
        }
        this.product = new Product(
            prodName,
            prodDesc,
            this.imgTitle,
            this.imageSRC.substring(23),
            prodPrice
        );
        this.prodAdminSVC.createProduct(this.product);
        this.toastr.success(`${this.name} added to posts`);
        this.router.navigate(['/admin']);
    }

    cancel() {
        this.router.navigate(['/admin']);
    }

}