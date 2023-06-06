import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponenet implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Android App',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Start building Android Apps today',
      price: 400.95,
      starRating: 3.2,
      imageUrl: 'assets/images/android_app.jpg',
    },
    {
      productId: 2,
      productName: 'IOS App',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: 'Start building IOS Apps today',
      price: 400.99,
      starRating: 4.2,
      imageUrl: 'assets/images/apple_app.jpg',
    },
    {
      productId: 5,
      productName: 'Cross Platform App',
      productCode: 'GDN-0011',
      releaseDate: 'May 21, 2021',
      description: 'Start building IOS Apps today',
      price: 1400.96,
      starRating: 4.8,
      imageUrl: 'assets/images/cross_platform_app.jpg',
    },
    {
      productId: 8,
      productName: 'CRM Solution',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: 'Discover the best CRM Software for your organisation.',
      price: 501.55,
      starRating: 3.7,
      imageUrl: 'assets/images/crm_solution.jpg',
    },
    {
      productId: 9,
      productName: 'Website',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: 'Create your website and grow with confidence',
      price: 456.55,
      starRating: 3.7,
      imageUrl: 'assets/images/website.jpg',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
}
