import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GetsecretosService } from 'src/app/services/getsecretos.service';
import { ModalNoInternetComponent } from '../modal-no-internet/modal-no-internet.component';
import { ISecreto } from '../../interfaces/secret.interface';

@Component({
  selector: 'app-modal-secretos',
  templateUrl: './modal-secretos.component.html',
  styleUrls: ['./modal-secretos.component.scss'],
})
export class ModalSecretosComponent implements OnInit {

  @Input()
  id: number = 0;
  secret: ISecreto = {
    img:'',
    titulo:'',
    ubicacion:'',
    recompensa:'',
  };

  constructor(
    private modalController: ModalController,
    private secretService: GetsecretosService
    ) { }

  ngOnInit() {
    this.getSecret(this.id);
  }

  getSecret(id:number){
    this.secretService.getSecret(id).subscribe({
      next:
      (secret: any) =>{
        console.log(secret);
        
        this.secret = secret
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

  cerrar(){
    this.modalController.dismiss();
  }

}
