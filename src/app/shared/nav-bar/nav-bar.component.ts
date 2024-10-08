import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app_material/app-material';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [AppMaterialModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  logo = 'assets/img/logo.png'
  id:any
  text:any
  private paramSubscription!: Subscription
constructor(

  private services: ServicesService,
){

}

  ngOnInit(): void {
   this.services.getSelection().subscribe((x:any)=>{
    console.log('titulo miga',x)
    this.text = x
   })
  }

 
}
