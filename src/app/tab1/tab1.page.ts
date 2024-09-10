import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router) {}
  Inicio() {
    this.router.navigateByUrl('/inicio'); // Navega a la página de eventos
  }
  EditarPerfil() {
    this.router.navigateByUrl('/editar-perfil'); // Navega a la página de eventos
  }
}
