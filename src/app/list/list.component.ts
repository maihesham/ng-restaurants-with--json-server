import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {  restaurant } from '../Modules';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ListRestos:Array<restaurant>=[];
  private restoSub: Subscription | undefined;
  constructor(private resto :RestoService) { }

  ngOnInit(): void {
   
   this.restoSub = this.resto
    .GetList()
    .subscribe((ListRestos: Array<restaurant>) => {
      this.ListRestos = ListRestos;
      
    });
  }
  ngOnDestroy(): void {
    //when close page 
    if (this.restoSub) {
      this.restoSub.unsubscribe();
    }

    
  }

}
