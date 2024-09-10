import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  private selectedItem: any;
  private registered: boolean = false;
  private isRegistered: boolean = false;
  private items: any[] = [ // Lista de eventos
    { nombre: 'Evento 1', fecha: '2024-09-01', aforo: 7500 },
    { nombre: 'Evento 2', fecha: '2024-09-02', aforo: 3000 },
    { nombre: 'Evento 3', fecha: '2024-09-01', aforo: 8500 },
    { nombre: 'Evento 4', fecha: '2024-09-01', aforo: 4500 },
    { nombre: 'Evento 5', fecha: '2024-09-01', aforo: 6500 },
    { nombre: 'Evento 6', fecha: '2024-09-01', aforo: 5500 },
    { nombre: 'Evento 7', fecha: '2024-09-01', aforo: 1500 },
    { nombre: 'Evento 8', fecha: '2024-09-01', aforo: 2500 },
    { nombre: 'Evento 9', fecha: '2024-09-01', aforo: 500 },
    { nombre: 'Evento 10', fecha: '2024-09-01', aforo: 76500 },
    { nombre: 'Evento 11', fecha: '2024-09-01', aforo: 47500 },
    { nombre: 'Evento 12', fecha: '2024-09-01', aforo: 37500 },
    { nombre: 'Evento 13', fecha: '2024-09-01', aforo: 27500 },
    { nombre: 'Evento 14', fecha: '2024-09-01', aforo: 17500 },
    { nombre: 'Evento 15', fecha: '2024-09-01', aforo: 57500 },
    { nombre: 'Evento 16', fecha: '2024-09-01', aforo: 67500 },
    { nombre: 'Evento 17', fecha: '2024-09-01', aforo: 87500 },
    { nombre: 'Evento 18', fecha: '2024-09-01', aforo: 97500 },
    { nombre: 'Evento 19', fecha: '2024-09-01', aforo: 1400 },
    { nombre: 'Evento 20', fecha: '2024-09-01', aforo: 16500 },

  ];
  constructor() { }

  setSelectedItem(item: any) {

    this.selectedItem = item;
  }

  getSelectedItem() {

    return this.selectedItem;
  }
    // Obtener lista de eventos
    getItems() {
      return this.items;
    }
    toggleInscripcion(eventId: number) {
      const evento = this.items.find(item => item.id === eventId);
      if (evento) {
        evento.inscrito = !evento.inscrito;
      }
    }
  
    getInscripcionStatus(eventId: number) {
      const evento = this.items.find(item => item.id === eventId);
      return evento ? evento.inscrito : false;
    }
    inscribirEvento(eventId: number) {
      const evento = this.items.find(item => item.id === eventId);
      if (evento) {
        evento.isInscribed = true;
      }
      }
      cancelarInscripcion(eventId: number) {
        const evento = this.items.find(item => item.id === eventId);
        if (evento) {
          evento.isInscribed = false;
        }
      }
      isEventoInscrito(eventId: number) {
        const evento = this.items.find(item => item.id === eventId);
        return evento ? evento.isInscribed : false;
      }
    
  isUserRegistered() {
    return this.isRegistered;
  }
  registerUser() {
    this.isRegistered = true;
    console.log('Usuario registrado en el evento:', this.selectedItem)
  }
  unregisterUser() {
    this.isRegistered = false;
    console.log('Usuario canceló la inscripción en el evento:', this.selectedItem);

  }
  getUserData() {
    return {
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com'
    }
    }
  hasSelectedItem() {
    return this.selectedItem !== null;
  }
  register() {
    this.registered = false;
  }
  unregister() {
    this.registered = false;
  }
  Inscribirse(evento: any) {
    evento.isInscribed = true;
    console.log(`Te has inscrito en ${evento.name}`);
  }
  

}
