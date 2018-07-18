import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { JsonphService } from '../jsonph.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
