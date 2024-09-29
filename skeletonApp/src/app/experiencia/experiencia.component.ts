import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {
  experienciaForm: FormGroup;
  currentYear: number; // Agregar esta propiedad

  constructor(private fb: FormBuilder) {
    this.currentYear = new Date().getFullYear(); // Asignar el año actual

    this.experienciaForm = this.fb.group({
      empresa: ['', Validators.required],
      annoInicio: ['', [Validators.required, Validators.min(1900), Validators.max(this.currentYear)]],
      trabajaActualmente: [false],
      annoTermino: [''],
      cargo: ['', Validators.required]
    });

    this.validaCampos();
  }

  validaCampos() {
    this.experienciaForm.get('trabajaActualmente')?.valueChanges.subscribe((trabajaActualmente) => {
      if (trabajaActualmente) {
        this.experienciaForm.get('annoTermino')?.clearValidators();
      } else {
        this.experienciaForm.get('annoTermino')?.setValidators([
          Validators.required,
          Validators.min(this.experienciaForm.get('annoInicio')?.value),
          Validators.max(this.currentYear) // Usar currentYear aquí
        ]);
      }
      this.experienciaForm.get('annoTermino')?.updateValueAndValidity();
    });
  }

  ngOnInit() {}
}