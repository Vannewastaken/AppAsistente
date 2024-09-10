import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  constructor(private alertcontroller: AlertController, 
    private router: Router) { }

  ngOnInit() {
  }
  async ConfirmarCambios() {
    const alert = await this.alertcontroller.create({
      header: 'Confirmar Cambios?',
      message: 'Ingrese la contraseña actual para confirmar los cambios ',
      mode: 'ios',
      inputs: [ 
        {
          placeholder: 'Contraseña actual',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab1']);
          },
        },
      ],
    });
  
    await alert.present();
  }

  Volver(){
    this.router.navigateByUrl('/tabs/tab1'); // Navega a la página de cuenta
  }
  

}
