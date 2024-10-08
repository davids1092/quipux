import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private selection = new BehaviorSubject <string>('')
  baseCompanies =[
    {
      "empresa": {
        id:1,
        "nombre": "Quipux S.A.S",
        "fecha_creacion": "1995/05/06",
        "direccion": {
          "calle": "Carrera 43A No. 3 Sur-130",
          "edificio": "Ed. Milla de Oro, Distrito de Negocios Torre 1, Piso 12",
          "ciudad": "Medellín",
          "pais": "Colombia"
        },
        "telefonos": {
          "fijo": "+57 (4) 313-70-00",
          "fax": "+57 (4) 313-44-77"
        },
        "sitio_web": "www.quipux.com/site"
      },
      "contacto": {
        "direccion": "Carrera 52 # 91-66, Medellín Colombia",
        "direccion_correspondencia": "Carrera 52 # 91-66, Envigado Colombia",
        "correo_electronico": "usuarioapellido@hotmail.com",
        "telefonos": {
          "fijo": "+57 (4) 313-70-00",
          "celular": "(312) 313-44-77"
        },
        "sitio_web": "www.usuarioapellido.com",
        "redes_sociales": {
          "instagram": "www.instagram.com/usuarioapellido",
          "linkedin": "www.linkedin.com/usuarioapellido"
        }
      }
    },

    {
      "empresa": {
        id:2,
        "nombre": "Quipux empresa 2 S.A.S",
        "fecha_creacion": "1995/05/06",
        "direccion": {
          "calle": "Carrera 43A No. 3 Sur-130",
          "edificio": "Ed. Milla de Oro, Distrito de Negocios Torre 1, Piso 12",
          "ciudad": "Medellín",
          "pais": "Colombia"
        },
        "telefonos": {
          "fijo": "+57 (4) 313-70-00",
          "fax": "+57 (4) 313-44-77"
        },
        "sitio_web": "www.quipux.com/site"
      },
      "contacto": {
        "direccion": "Carrera 52 # 91-66, Medellín Colombia",
        "direccion_correspondencia": "Carrera 52 # 91-66, Envigado Colombia",
        "correo_electronico": "usuarioapellido@hotmail.com",
        "telefonos": {
          "fijo": "+57 (4) 313-70-00",
          "celular": "(312) 313-44-77"
        },
        "sitio_web": "www.usuarioapellido.com",
        "redes_sociales": {
          "instagram": "www.instagram.com/usuarioapellido",
          "linkedin": "www.linkedin.com/usuarioapellido"
        }
      }
    }
    
  ]

  baseArticles = [
    {
        "id": "1",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "2",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "3",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "4",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "5",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "6",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "7",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    },
    {
        "id": "8",
        "imagen": "https://via.placeholder.com/100",
        "titulo": "Titulo del artículo",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?"
    }
]

contact =  {
  "direccion": "Carrera 52 # 91-66, Medellín Colombia",
  "direccion_correspondencia": "Carrera 52 # 91-66, Envigado Colombia",
  "correo_electronico": "usuarioapellido@hotmail.com",
  "telefonos": {
    "fijo": "+57 (4) 313-70-00",
    "celular": "(312) 313-44-77"
  },
  "sitio_web": "www.usuarioapellido.com",
  "redes_sociales": {
    "instagram": "www.instagram.com/usuarioapellido",
    "linkedin": "www.linkedin.com/usuarioapellido"
  }
}
  constructor() { }

  getCompanies(id:number){
    console.log('empresa q se solicita', id)
    let company = this.baseCompanies.find((x:any)=> x.empresa.id == id)
    console.log('empresa q se devuelve', company)
    return company;
  }

  setSelection(sel:string){
    this.selection.next(sel);
    sessionStorage.setItem('menu', sel)
  }
  getSelection() :Observable<string>{
    if( sessionStorage.getItem('menu') != undefined){
      this.selection.next(sessionStorage.getItem('menu')!);
    }
    return this.selection.asObservable()
;  }


getArticles(){

  return this.baseArticles;
}

getContact(){

  return this.contact;
}

}
