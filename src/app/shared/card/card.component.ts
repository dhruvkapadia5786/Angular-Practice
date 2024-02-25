import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { SlicePipe } from '@angular/common';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;
  selectedProduct!: Product;
  constructor(private productService : ProductService){

  }
  onProductClick(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
      // You can now use this.product to display the details in your template
    });
  }
}
