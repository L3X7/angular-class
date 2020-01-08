import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-ejerciciootro1',
  templateUrl: './ejerciciootro1.component.html',
  styleUrls: ['./ejerciciootro1.component.scss']
})
export class Ejerciciootro1Component implements OnInit {

  public list: any[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.Func();
  }

  private Func (): void {
    this.list = [];
    this.postService.GetPost().subscribe(
      result => {
        this.list = result;
      },
      error => {
        console.log('error');
      },
      ()=>{
        this.list = [...this.list];
      }
    )
  }

}
