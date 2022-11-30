import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalNoInternetComponent } from 'src/app/components/modal-no-internet/modal-no-internet.component';
import { ModalSecretosComponent } from 'src/app/components/modal-secretos/modal-secretos.component';
import { ISecreto } from 'src/app/interfaces/secret.interface';
import { GetsecretosService } from 'src/app/services/getsecretos.service';

@Component({
  selector: 'app-secretos',
  templateUrl: './secretos.page.html',
  styleUrls: ['./secretos.page.scss'],
})
export class SecretosPage implements OnInit {

  slideOpts = {};
  secrets: ISecreto[] = [];
  constructor(
    private modalController: ModalController,
    private secretService: GetsecretosService,
  ) { }

  ngOnInit() {
    this.getSecrets();
  }

  getSecrets(){
    this.secretService.getSecrets().subscribe({
        next:
        (secretos: ISecreto[]) => {
          console.log(secretos);
          this.secrets = secretos;
        },
        error:
        (errorR: HttpErrorResponse) =>{
          if (errorR.status == 0 || undefined) {
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

  
  async verDetalleSecret( id: number){
    const modal = await this.modalController.create({
      component: ModalSecretosComponent,
      componentProps: { id : id }
    });
    modal.present();
  }
}
