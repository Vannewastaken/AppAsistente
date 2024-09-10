import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDataService } from 'src/app/services/event-data.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  items: any[] = [];

  constructor(private router: Router, private eventDataService: EventDataService) {}

  ngOnInit() {
    this.loadEvents();  
  }
  toggleInscripcion(item: any) {
    this.eventDataService.toggleInscripcion(item.id);
  }

  getInscripcionStatus(item: any) {
    return this.eventDataService.getInscripcionStatus(item.id);
  }

  ionViewWillEnter() {
    this.loadEvents();  
  }

  loadEvents() {
    this.items = this.eventDataService.getItems();  
  }

  abrirDetalle(item: any) {
    this.eventDataService.setSelectedItem(item);  
    this.router.navigate(['/detalle-eventos']);  
  }

  loadData($event: any) {
    console.log('Cargando siguientes eventos...');

    setTimeout(() => {
      if (this.items.length > 50) {
        $event.target.complete();
        return;
      }

      const nuevoArr = Array(20).fill({
        nombre: 'Nuevo Evento',
        descripcion: 'Descripción del nuevo evento',
        fecha: '2024-09-03',
        hora: '12:00 PM',
        ubicacion: 'Nueva Ubicación'
      });

      this.items.push(...nuevoArr);
      $event.target.complete();
    }, 1000);
  }
}