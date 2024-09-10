import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage  {


  isRegistered: boolean = false;
  selectedItem: any;
  eventCode: string = '';
  userData: any;
  constructor(private eventDataService: EventDataService) {}

  ionViewWillEnter() {
    // Obtener el evento seleccionado y el estado de inscripción
    this.selectedItem = this.eventDataService.getSelectedItem();
    this.isRegistered = this.eventDataService.isUserRegistered();
    this.userData = this.eventDataService.getUserData();

    if (this.isRegistered && this.selectedItem) {
      const qrInfo = {
        user: this.userData,
        event: {
          nombre: this.selectedItem.nombre,
          descripcion: this.selectedItem.descripcion,
          aforo: this.selectedItem.aforo,
          ubicacion: this.selectedItem.ubicacion,
          fecha: this.selectedItem.fecha,
          hora: this.selectedItem.hora
        }
      };

      // Convertir el objeto en una cadena JSON para pasarlo al QR
      this.eventCode = JSON.stringify(qrInfo);
      console.log('Datos del QR generados:', this.eventCode);
    } else {
      console.log('Usuario NO está inscrito.');
    }
  }
}
