import { Component, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-mision-esperanza-modal',
  templateUrl: './mision-esperanza-modal.component.html',
  styleUrls: ['./mision-esperanza-modal.component.scss']
})
export class MisionEsperanzaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MisionEsperanzaModalComponent>
  ) {
    console.log('Modal creado'); // Verifica en consola
  }

  closeModal() {
    this.dialogRef.close();
  }
}