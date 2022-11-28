import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalHeroeComponent } from 'src/app/components/modal-heroe/modal-heroe.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ){}
  ngOnInit() {
    }
  async verDetalleHeroe(){
    const modal = await this.modalCtrl.create({
      component: ModalHeroeComponent,
      componentProps: { }
    });
    modal.present();
  }
  

}
