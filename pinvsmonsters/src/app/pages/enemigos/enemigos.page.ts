import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNoInternetComponent } from 'src/app/components/modal-no-internet/modal-no-internet.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { IEnemy } from 'src/app/interfaces/enemy.interface';
import { GetEnemiesService } from 'src/app/services/get-enemies.service';

@Component({
  selector: 'app-enemigos',
  templateUrl: './enemigos.page.html',
  styleUrls: ['./enemigos.page.scss'],
})
export class EnemigosPage implements OnInit {

  enemies: IEnemy[]=[];

  constructor(
    private modalController: ModalController,
    private enemiesService: GetEnemiesService
  ) { }

  ngOnInit() {
    this.getEnemies();
  }

  getEnemies(){
    this.enemiesService.getEnemies().subscribe({
      next: 
      (enemies: IEnemy[]) =>{
        this.enemies = enemies;
      },
      error:
      (errorR: HttpErrorResponse) =>{
        if (errorR.status == 0 || undefined) {
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
  async verDetalleEnemy( id: number){
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { id : id }
    });
    modal.present();
  }
}
