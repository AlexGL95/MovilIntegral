import { Component, OnInit } from '@angular/core';
import { GetcacheService } from 'src/app/services/getcache.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  imgBanner='';
  constructor(
    private getImg: GetcacheService
  ){}
  ngOnInit(): void {
    this.getImg.getimg().subscribe(img=>{
      this.imgBanner = img;
    });
  }
}
