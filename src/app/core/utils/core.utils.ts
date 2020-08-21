import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreUtils {
  /**
   * Copy a string into clipboard
   *
   * @param val the string to be copied to clipboard
   */
  copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


  constructor(
  ) {}
}
