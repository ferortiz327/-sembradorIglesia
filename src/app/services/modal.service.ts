import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPromotionsComponent } from 'app/components/modal-promotions/modal-promotions.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef: any;

  constructor(private modalService: NgbModal) {}


  mostrarModalActividades() {
    // Usamos { backdrop: 'static', keyboard: false } para evitar cerrar haciendo clic fuera
    if (this.modalRef) return; // Evitar múltiples modales
    
    this.modalRef = this.modalService.open(ModalPromotionsComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      keyboard: false,
      windowClass: 'modal-actividades'
    });

    this.modalRef.result.finally(() => {
      this.modalRef = null;
    });
  }
}
