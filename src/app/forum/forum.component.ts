import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { Comm } from '../comm';

import { JsonphService } from '../jsonph.service';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  posts: Post[] = [];
  //comments: Comm[] = [];
  
  heroes$: Observable<Post[]>;
  private searchTerms = new Subject<string>();

  showSearch: boolean = false;
  showAdd: boolean = false;
  constructor(private jsonphService: JsonphService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.jsonphService.getPosts()
      //.subscribe(posts => this.posts = posts.slice(1, 5));
      .subscribe(posts => this.posts = posts.slice(0,10));
  }

  addPost(title:string, body:string) : void {
    let newPost = new Post();
    newPost.title = title;
    newPost.body = body;
    this.jsonphService.addPost(newPost)
    .subscribe(post => {
      // server return fake id = 101
      newPost.id = this.posts.length + 1;
      this.posts.push(newPost);
    });

  }

  searchPostClick() : void {
    this.showSearch = !this.showSearch;
  }

  addPostClick() : void {
    this.showAdd  = !this.showAdd;
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
