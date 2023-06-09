import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  imageWidth: number = 500;
  imageMargin: number = 10;
  sub!: Subscription;
  errorMessage: string = '';
  id: number = 0;
  rating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${this.id}`;
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.product = products.find((p) => p.productId === this.id);
        this.rating = this.product !== undefined ? this.product.starRating : 0;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
