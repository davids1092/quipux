import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AppMaterialModule } from '../../app_material/app-material';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent, AppMaterialModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router, private services: ServicesService) {}
  readonly panelOpenState = signal(false);
  ngOnInit(): void {
    this.checkScreenSize(window.innerWidth);
  }
  isvisible = true;
  menuItems = [
    {
      id: 1,
      name: 'EMPRESAS',
      icon: 'work',
      link: 'empresa',
      active: false,
      subMenus: [
        {
          id: 1,
          name: 'QUIPUX',
        },
        {
          id: 2,
          name: 'QUIPUX 2',
        },
      ],
    },
    {
      id: 2,
      active: false,
      link: 'articulo',
      name: 'ARTICULOS',
      icon: 'insert_drive_file',
      subMenus: [{ id: 1, name: 'Articulo' }],
    },
  ];
  isSmallScreen: boolean = false;

  goRote(submenu: any, menu: any) {
    console.log('id ruta', submenu.id);
    this.router.navigateByUrl(`home/${menu.link}/${submenu.id}`);
    this.isSmallScreen = true;
    this.services.setSelection(submenu.name);
  }
  checkScreenSize(width: number) {
    this.isSmallScreen = width < 850;
    this.isvisible = width < 850;
    console.log('Es pantalla pequeña:', this.isSmallScreen);
  }
  goHome() {
    this.router.navigateByUrl('home/inicio');
    for (let i of this.menuItems) {
      i.active = false;
    }
    this.isSmallScreen = !this.isSmallScreen;
    this.services.setSelection('');
  }
  resize() {
    this.isSmallScreen = false;
  }
  select(item: any) {
    for (let i of this.menuItems) {
      if (i.id == item.id) {
        i.active = true;
      } else {
        i.active = false;
      }
    }
    console.log(this.menuItems);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }
}
