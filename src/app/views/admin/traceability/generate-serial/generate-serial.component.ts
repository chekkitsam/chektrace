import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/_services';

@Component({
  selector: 'app-generate-serial',
  templateUrl: './generate-serial.component.html',
  styleUrls: ['./generate-serial.component.css']
})
export class GenerateSerialComponent implements OnInit {

  isCreateNew: boolean = false;
  isExisting: boolean = false;

  constructor(
    private router: Router,
    private  productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  generate(){
    this.router.navigate(['/traceability/package-level'])
  }


  createNew(){
    this.isCreateNew = !this.isCreateNew;
  }

  useExisting(){
    this.isExisting = !this.isExisting;
  }

  getPackageLevel(){
    // this.productService.getPackageLevel()
  }

}
