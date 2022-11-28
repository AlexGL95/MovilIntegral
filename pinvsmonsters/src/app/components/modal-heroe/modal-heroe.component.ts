import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { IHeroe } from 'src/app/interfaces/heroe.interface';
import { GetHeroService } from 'src/app/services/get-hero.service';
import { ModalNoInternetComponent } from '../modal-no-internet/modal-no-internet.component';

@Component({
  selector: 'app-modal-heroe',
  templateUrl: './modal-heroe.component.html',
  styleUrls: ['./modal-heroe.component.scss'],
})
export class ModalHeroeComponent implements OnInit {

  @Input() pin = '';
  heroeInfo: IHeroe = {
    curiosidades: '',
    danno: 0,
    iconoDanno: '',
    iconoSalto:'',
    iconoVelocidad:'',
    iconoVida:'',
    id: 0,
    img: '',
    nombre:'',
    salto: 0,
    velocidad: 0,
    vida: 0,
  };

  constructor(
    private modalController: ModalController,
    private heroeService: GetHeroService
    ) { }
  
  ngOnInit() {
    this.getHeroe();
  }

  cerrar(){
    this.modalController.dismiss();
  }

  getHeroe(){
    this.heroeService.getHeroe().subscribe(
      {
        next:
        (infoHeroe: IHeroe) => {
          this.heroeInfo = infoHeroe;
        },
        error:
        (errorR: HttpErrorResponse) =>{
          if (errorR.status == 0) {
            this.noInternetModal();
          }
        }
      }
    );
  }

  async noInternetModal(){
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: ModalNoInternetComponent,
      componentProps: { }
    });
    modal.present();
  }
}
