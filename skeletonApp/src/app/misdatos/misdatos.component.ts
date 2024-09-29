import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
})
export class MisdatosComponent  implements OnInit {

  username: string = '';
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  dob: string = '';
  
  constructor(private route: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || ''; 
    });
  }
  async mostrarInfo() {
    const alert = await this.alertController.create({
      header: 'Información Usuario',
      message: `Nombre: ${this.firstName} ${this.lastName}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  LimpiarForm() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.dob = '';
  }

}
