import { Component , signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Caesar } from './components/caesar/caesar';
import { Atbash } from './components/atbash/atbash';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Caesar, Atbash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cifrados');
  // Índice de Código #4.1
  modoActivo: 'caesar' | 'atbash' = 'caesar';
  // Índice de Código #4.2
  cambiarModo(modo: 'caesar' | 'atbash') {
    this.modoActivo = modo;
  }
}
