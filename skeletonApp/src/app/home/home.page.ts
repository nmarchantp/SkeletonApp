import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  dob: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      const state = navigation.extras.state as { username: string, password: string };
      this.username = state.username;
    }
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'User Information',
      message: `Name: ${this.firstName} ${this.lastName}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.dob = '';
  }
}