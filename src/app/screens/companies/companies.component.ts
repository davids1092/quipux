import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppMaterialModule } from '../../app_material/app-material';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule,AppMaterialModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'] // Corrige 'styleUrl' a 'styleUrls'
})
export class CompaniesComponent implements OnInit, OnDestroy {
  id: any;
  company: any;
   logo = 'assets/img/logo.png'
  private paramSubscription!: Subscription;

  constructor(
    private services: ServicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('Este es el id', this.id);
      this.getCompany();
    });
  }

  getCompany(): void {
    this.company = this.services.getCompanies(this.id);
  }

  ngOnDestroy(): void {
    
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }
}
