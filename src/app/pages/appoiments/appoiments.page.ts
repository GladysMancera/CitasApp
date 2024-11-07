import { Component, OnInit } from '@angular/core'; // Asegúrate de que OnInit está importado
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appoiments',
  templateUrl: './appoiments.page.html',
  styleUrls: ['./appoiments.page.scss'],
})
export class AppoimentsPage implements OnInit { // Implementa OnInit
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
      medicalArea: ['', Validators.required]
    });
  }

  // Implementación del ciclo de vida OnInit
  ngOnInit(): void {} // Asegúrate de que tenga el tipo :void

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      // Aquí puedes redirigir o mostrar un mensaje de éxito
      this.navCtrl.back(); // Vuelve a la página anterior
    }
  }
}
