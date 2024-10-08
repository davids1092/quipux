import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
banner = 'assets/img/resource-1.png'
cards=[
  {
    title:'Certificado',
    description:'Conoce los beneficios que tenemos para ti al registrarte',
    button:'Beneficios'

  },
  {
    title:'Crear cuenta',
    description:'Conoce los beneficios que tenemos para ti al registrarte',
    button:'Ver todo'

  },
  {
    title:'Top trámites',
    description:'Conoce los trámites más solicitados.',
    button:'Ver todo'

  }
]
}
