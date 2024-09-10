import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, private menucontroller: MenuController) { }

  ngOnInit() {
  }

  Eventos() {
    this.router.navigateByUrl('/eventos'); // Navega a la página de eventos
  }

  IrCuenta(){
    this.router.navigateByUrl('/tabs/tab1'); // Navega a la página de cuenta
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}
