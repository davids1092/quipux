import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { CarroucelComponent } from './components/carroucel/carroucel.component';
import { ArticleComponent } from './components/article/article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CarroucelComponent,ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  private paramSubscription!: Subscription;
  id: any;
  article: any;
  company: any;
  logo = 'assets/img/logo.png'
  constructor(
    private services: ServicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  
      this.article = this.services.getArticles()
      this.company = this.services.getContact()

  }

}
