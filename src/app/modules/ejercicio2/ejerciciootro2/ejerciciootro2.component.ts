import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-ejerciciootro2',
  templateUrl: './ejerciciootro2.component.html',
  styleUrls: ['./ejerciciootro2.component.scss']
})
export class Ejerciciootro2Component implements OnInit {

  public list: any[];
  constructor(private postLink2: PostService) { }

  ngOnInit() {
    this.Link2();
  }

  private Link2(): void {
    this.list = [];
    this.postLink2.GetLink2().subscribe(
      result => {
        this.list = result;
      },
      error => {
        console.log('Error');
      },
      () => {
        this.list = [...this.list];
      }
    )
  }

}
