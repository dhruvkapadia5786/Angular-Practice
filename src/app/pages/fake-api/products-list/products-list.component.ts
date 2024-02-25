import { Component } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';
import { CardComponent } from "../../../shared/card/card.component";
import { SlicePipe } from '@angular/common';

@Component({
    selector: 'app-products-list',
    standalone: true,
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.scss',
    imports: [CardComponent, SlicePipe]
})
export class ProductsListComponent {
  products!: Product[];
  product!: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addProduct() {
    const product = {
      title: 'Test Product',
      price: 13.5,
      description: 'Lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    };
    this.productService.addProduct(product).subscribe((data: any) => {
      console.log(data);
    });
  }

}
