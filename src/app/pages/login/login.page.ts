import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertcontroller: AlertController, 
    private router: Router) { }

  ngOnInit() {
  }

  async login(){

    const alert = await this.alertcontroller.create({
      header: 'Login',
      message: 'Bienvenido a mi App!',
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
