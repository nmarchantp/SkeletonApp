import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent  implements OnInit {

  certificadoForm: FormGroup;
  currentDate: Date;

  constructor(private fb: FormBuilder) {
    this.currentDate = new Date();
    this.certificadoForm = this.fb.group({
      nombreCertificado: ['', Validators.required],
      fechaObtencion: ['', Validators.required],
      tieneVencimiento: [false],
      fechaVencimiento: [''],
    });

    this.validaCampos();
  }

  validaCampos() {
    this.certificadoForm.get('tieneVencimiento')?.valueChanges.subscribe((tieneVencimiento) => {
      if (tieneVencimiento) {
        this.certificadoForm.get('fechaVencimiento')?.setValidators([Validators.required]);
      } else {
        this.certificadoForm.get('fechaVencimiento')?.clearValidators();
      }
      this.certificadoForm.get('fechaVencimiento')?.updateValueAndValidity();
    });
  }

  ngOnInit() {}

}
