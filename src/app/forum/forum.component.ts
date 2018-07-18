import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { Comm } from '../comm';

import { JsonphService } from '../jsonph.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  posts: Post[] = [];
  //comments: Comm[] = [];
  constructor(private jsonphService: JsonphService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.jsonphService.getPosts()
      //.subscribe(posts => this.posts = posts.slice(1, 5));
      .subscribe(posts => this.posts = posts);
  }

}
