import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/services/cita.service';  // Asegúrate de ajustar la ruta correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class CitaPage implements OnInit {
  appointmentForm: FormGroup;
  medicalAreas: string[] = ['Cardiología', 'Dermatología', 'Pediatría', 'Ginecología'];

  constructor(
    private formBuilder: FormBuilder,
    private citaService: CitaService, // Inyectamos el servicio para gestionar las citas
    private router: Router
  ) {}

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      medicalArea: ['', [Validators.required]],
      appointmentDateTime: ['', [Validators.required]],
    });
  }

  // Método para enviar los datos del formulario
  onSubmit() {
    if (this.appointmentForm.valid) {
      this.citaService.addCita(this.appointmentForm.value).then(() => {
        // Lógica después de agendar la cita (redirigir o mostrar mensaje)
        console.log('Cita agendada exitosamente');
        this.router.navigate(['/home']);  // O redirige a otra página después de agendar la cita
      }).catch(error => {
        console.error('Error al agendar la cita:', error);
      });
    }
  }
}
