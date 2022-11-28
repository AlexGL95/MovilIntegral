import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IEnemy } from 'src/app/interfaces/enemy.interface';
import { GetEnemiesService } from 'src/app/services/get-enemies.service';
import { ModalNoInternetComponent } from '../modal-no-internet/modal-no-internet.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input()
  id: number = 0;

  enemyInfo: IEnemy = {
    curiosidades: '',
    danno: 0,
    descripcion:'',
    iconoDanno: '',
    iconoVelocidad:'',
    iconoVida:'',
    id: 0,
    img: '',
    imgBanner:'',
    nombre:'',
    velocidad: 0,
    vida: 0,
  };

  constructor(
    private modalController: ModalController,
    private enemiesService: GetEnemiesService
  ) { }

  ngOnInit() {
    this.getEnemy(this.id);
  }

  cerrar(){
    this.modalController.dismiss();
  }

  getEnemy(id:number){
    this.enemiesService.getEnemy(id).subscribe({
      next:
      (enemy: IEnemy) =>{
        this.enemyInfo = enemy
      },
      error:
      (errorR: HttpErrorResponse) =>{
        if (errorR.status == 0) {
          this.noInternetModal();
        }
      }
    });  
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
