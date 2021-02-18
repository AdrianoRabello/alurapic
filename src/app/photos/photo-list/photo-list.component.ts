import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {


  photos: Photo[] = [];

  filter:string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) {


  }


  ngOnInit(): void {

    this.username = this.activatedRoute.snapshot.params.userName;

    //this properties set values in resolver. this configuration is on app-router-module like resolver 
    this.photos = this.activatedRoute.snapshot.data.photos;

  }



  ngOnDestroy(): void {


  }

  load() {
    this.photoService.listFromUsernamePaginated(this.username, ++this.currentPage).subscribe((photos: Photo[]) => {

      this.filter = '';
      this.photos = this.photos.concat(photos);

      if (photos.length)
        this.hasMore = false;
    })
  }
}
