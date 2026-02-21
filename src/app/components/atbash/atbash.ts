import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cipher } from '../../services/cipher';

@Component({
  selector: 'app-atbash',
  imports: [CommonModule, FormsModule],
  templateUrl: './atbash.html',
  styleUrl: './atbash.css',
})
export class Atbash {
  private cipherService = inject(Cipher);
  
  textoOriginal: string = '';
  copiado: boolean = false;

  get textoCifrado(): string {
    return this.cipherService.cifrarAtbash(this.textoOriginal).trimEnd();
  }

  async copiarAlPortapapeles() {
    if (!this.textoCifrado) return;
    try {
      await navigator.clipboard.writeText(this.textoCifrado);
      this.copiado = true;
      setTimeout(() => this.copiado = false, 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles: ', err);
    }
  }
}
