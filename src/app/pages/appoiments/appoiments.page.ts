import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoiments',
  templateUrl: './appoiments.page.html',
  styleUrls: ['./appoiments.page.scss'],
})
export class AppoimentsPage implements OnInit {

  // Variables para gestionar el calendario y las citas
  calendarModalOpen = false;
  selectedDate: string = '';
  selectedSpecialty: string = '';

  constructor() { }

  ngOnInit() {
  }

  // Método para abrir el calendario cuando se selecciona una especialidad médica
  openCalendar(specialty: string) {
    this.selectedSpecialty = specialty;
    this.calendarModalOpen = true;
  }

  // Método para cerrar el modal del calendario
  closeCalendar() {
    this.calendarModalOpen = false;
  }

  // Método para manejar el cambio de fecha en el calendario
  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
  }

  // Método para registrar la cita (puedes extenderlo para guardarlo en una base de datos)
  registerAppointment() {
    console.log(`Cita registrada para ${this.selectedSpecialty} en ${this.selectedDate}`);
    this.closeCalendar();
  }

}