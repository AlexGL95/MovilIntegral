import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-no-internet',
  templateUrl: './modal-no-internet.component.html',
  styleUrls: ['./modal-no-internet.component.scss'],
})
export class ModalNoInternetComponent implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() {}

  cerrar(){
    this.modalController.dismiss();
  }
}
