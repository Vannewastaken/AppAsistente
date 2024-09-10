import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  constructor(private alertcontroller: AlertController, 
    private router: Router) { }

  ngOnInit() {
  }
  async Registrarse(){

    const alert = await this.alertcontroller.create({
      header: 'Te has registrado correctamente!',
      message: 'Bienvenido a la app de asistentes!',
      mode: 'ios',
      buttons: [
        {
          text: 'Ingresar',
          role: 'confirm',
          handler: () => {
             this.router.navigate(['/inicio']);
          },
        },
      ],
    });
  
    await alert.present();
  
    }

}
