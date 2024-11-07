import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appoiments',
  templateUrl: './appoiments.page.html',
  styleUrls: ['./appoiments.page.scss'],
})
export class AppoimentsPage {
  appointmentForm: FormGroup;
  medicalAreas: string[] = [
    'Cardiología',
    'Dermatología',
    'Neurología',
    'Pediatría',
    'Ginecología'
  ];

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      medicalArea: ['', Validators.required],
      appointmentDateTime: ['', Validators.required] // Campo para la fecha y hora
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      this.navCtrl.back(); // Vuelve a la página anterior
    }
  }
}
