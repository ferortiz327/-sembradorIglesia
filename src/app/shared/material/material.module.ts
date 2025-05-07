import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
<<<<<<< HEAD
import { MatDialogModule } from '@angular/material/dialog'

=======
>>>>>>> eabf9a4ae81172508516962bb7ac567b247fd844



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
<<<<<<< HEAD
    MatDatepickerModule,
    MatDialogModule
=======
    MatDatepickerModule
>>>>>>> eabf9a4ae81172508516962bb7ac567b247fd844
  ],
  exports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule
  ]
})
export class MaterialModule { 



}
