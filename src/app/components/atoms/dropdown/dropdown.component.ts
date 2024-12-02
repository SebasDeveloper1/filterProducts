import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() options: string[] = []; // Opciones del dropdown
  @Input() placeholder: string = 'Selecciona una opción'; // Texto inicial
  @Input() changeCtrl: FormControl = new FormControl(); // Control reactivo para el dropdown
}
