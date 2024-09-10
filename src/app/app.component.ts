import { Component } from '@angular/core';

interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Menu[]=[
    {
      icon:'person-circle-outline',
      name:'Mi Perfil',
      redirecTo:'/tabs/tab1'
    },
    {
      icon: 'calendar-outline',
      name: 'Eventos',
      redirecTo: '/eventos'  
    },

    {
      icon:'call-outline',
      name:'Contacto',
      redirecTo:'/contacto'
    },
    {
      icon:'close-circle-outline',
      name:'Cerrar sesión',
      redirecTo:'/login'
    }
    




  ]
  constructor() {}
}
