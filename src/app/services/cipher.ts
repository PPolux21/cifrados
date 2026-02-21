import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cipher {
  private readonly SYMBOLS = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

  cifrarCesar(texto: string, desplazamiento: number): string {
    if (!texto) return '';
    
    return texto.split('').map(char => {
      const code = char.charCodeAt(0);

      // Mayúsculas (A-Z)
      if (code >= 65 && code <= 90) {
        let newCode = (code - 65 + desplazamiento) % 26;
        if (newCode < 0) newCode += 26;
        return String.fromCharCode(newCode + 65);
      }
      // Minúsculas (a-z)
      else if (code >= 97 && code <= 122) {
        let newCode = (code - 97 + desplazamiento) % 26;
        if (newCode < 0) newCode += 26;
        return String.fromCharCode(newCode + 97);
      }
      // Números (0-9)
      else if (code >= 48 && code <= 57) {
        let newCode = (code - 48 + desplazamiento) % 10;
        if (newCode < 0) newCode += 10;
        return String.fromCharCode(newCode + 48);
      }
      // Símbolos
      else {
        const index = this.SYMBOLS.indexOf(char);
        if (index !== -1) {
          let newIndex = (index + desplazamiento) % this.SYMBOLS.length;
          if (newIndex < 0) newIndex += this.SYMBOLS.length;
          return this.SYMBOLS[newIndex];
        }
      }
      return char; // Si no entra en ninguna categoría, se devuelve igual
    }).join('');
  }

  cifrarAtbash(texto: string): string {
    if (!texto) return '';

    return texto.split('').map(char => {
      const code = char.charCodeAt(0);

      // Mayúsculas (A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(90 - (code - 65));
      }
      // Minúsculas (a-z)
      else if (code >= 97 && code <= 122) {
        return String.fromCharCode(122 - (code - 97));
      }
      // Números (0-9)
      else if (code >= 48 && code <= 57) {
        return String.fromCharCode(57 - (code - 48));
      }
      // Símbolos
      else {
        const index = this.SYMBOLS.indexOf(char);
        if (index !== -1) {
          return this.SYMBOLS[this.SYMBOLS.length - 1 - index];
        }
      }
      return char;
    }).join('');
  }
}
