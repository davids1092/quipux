import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',loadComponent: () => import('../app/screens/home/home.component').then(m=>m.HomeComponent),
        children:[
            {
                path: 'empresa/:id',
                loadComponent: () => import('../app/screens/companies/companies.component').then(m=>m.CompaniesComponent),
            },
            {
                path: 'articulo/:id',
                loadComponent: () => import('../app/screens/articles/articles.component').then(m=>m.ArticlesComponent),
            },
            {
                path: 'inicio',
                loadComponent: () => import('../app/screens/inicio/inicio.component').then(m=>m.InicioComponent),
            }
        ]
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home/inicio'
    },
    {
        path:'**',
        pathMatch:'full',
        redirectTo:'home/inicio'
    },
];
