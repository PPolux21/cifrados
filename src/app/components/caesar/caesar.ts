import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cipher } from '../../services/cipher';

@Component({
  selector: 'app-caesar',
  imports: [CommonModule, FormsModule],
  templateUrl: './caesar.html',
  styleUrl: './caesar.css',
})
export class Caesar {
  private cipherService = inject(Cipher);
  
  textoOriginal: string = '';
  desplazamiento: number = 3;
  copiado: boolean = false;

  get textoCifrado(): string {
    return this.cipherService.cifrarCesar(this.textoOriginal, this.desplazamiento).trimEnd();
  }

  async copiarAlPortapapeles() {
    if (!this.textoCifrado) return;
    try {
      await navigator.clipboard.writeText(this.textoCifrado);
      this.copiado = true;
      // Regresar el botón a su estado original después de 2 segundos
      setTimeout(() => this.copiado = false, 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles: ', err);
    }
  }
}
