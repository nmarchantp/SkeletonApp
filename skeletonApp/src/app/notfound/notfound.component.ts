import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateHome() {
    this.router.navigate(['/home']); // Asegúrate de que la ruta '/home' coincida con tu ruta real
  }

}
