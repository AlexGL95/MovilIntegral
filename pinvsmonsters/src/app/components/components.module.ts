import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { ModalHeroeComponent } from './modal-heroe/modal-heroe.component';
import { ModalNoInternetComponent } from './modal-no-internet/modal-no-internet.component';
import { ModalSecretosComponent } from './modal-secretos/modal-secretos.component';



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
    ModalSecretosComponent,
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    ModalHeroeComponent,
    ModalNoInternetComponent,
    ModalSecretosComponent,
  ],
  
})
export class ComponentsModule { }
