import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() buttonClick = new EventEmitter<string>();

  menu = [
    { name: 'Todos los Personajes', id: 'ver-todos' },
    { name: 'Vivos', id: 'alive' },
    { name: 'Muertos', id: 'dead' },
    { name: 'Desconocido', id: 'unknown' },
  ];

  onButtonClick(id: string): void {
    this.buttonClick.emit(id);
  }
}
