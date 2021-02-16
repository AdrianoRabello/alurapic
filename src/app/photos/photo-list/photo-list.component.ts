import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {


  photos: Photo[] = [];
  filter:string = '';

  constructor(private activatedRoute: ActivatedRoute) {   


  }


  ngOnInit(): void {
                  //this properties set values in resolver. this configuration is on app-router-module like resolver 
    this.photos = this.activatedRoute.snapshot.data.photos;

  }

  getFilter($event:any){


    this.filter = $event.target.value;
  }
}
