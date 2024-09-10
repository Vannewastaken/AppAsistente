import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-eventos',
  templateUrl: './detalle-eventos.page.html',
  styleUrls: ['./detalle-eventos.page.scss'],
})
export class DetalleEventosPage implements OnInit {

  selectedItem: any = null;
  isRegistered: boolean = false;
  

  constructor(private eventDataService: EventDataService,
              private router: Router
  ) {}


  ngOnInit() {
   // this.selectedItem = this.eventDataService.getSelectedItem();

   // if (this.selectedItem) {
   //////// }
  }
  ionViewWillEnter() {
    // Obtener el evento seleccionado y el estado de inscripción
    this.selectedItem = this.eventDataService.getSelectedItem();
    this.isRegistered = this.eventDataService.isUserRegistered();
  }
  
  toggleRegistration() {
    if (this.isRegistered) {
      // Cancelar inscripción
      this.eventDataService.unregisterUser();
      this.isRegistered = false;
      console.log('Inscripción cancelada para el evento:', this.selectedItem);
    } else {
      // Inscribirse
      this.eventDataService.registerUser();
      this.isRegistered = true;
      console.log('Usuario registrado en el evento:', this.selectedItem);
    }
  }
}