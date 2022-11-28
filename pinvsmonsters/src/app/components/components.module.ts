import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { ModalHeroeComponent } from './modal-heroe/modal-heroe.component';
import { ModalNoInternetComponent } from './modal-no-internet/modal-no-internet.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    HeaderComponent,
    ModalComponent,
    ModalHeroeComponent,
    ModalNoInternetComponent,
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    ModalHeroeComponent,
    ModalNoInternetComponent,
  ],
  
})
export class ComponentsModule { }
