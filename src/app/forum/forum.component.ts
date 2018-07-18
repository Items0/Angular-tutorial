import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { JsonphService } from '../jsonph.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];
  constructor(private jsonphService: JsonphService) { }

  ngOnInit() {
    this.getPosts();

    var x = document.getElementById("btn").innerText;
        if (x=="Show comments") {
            document.getElementById("btn").innerText  = "Hide comments";
        }
        else {
            document.getElementById("btn").innerText  = "Show comments";
        }
  }

  getPosts(): void {
    this.jsonphService.getPosts()
      //.subscribe(posts => this.posts = posts.slice(1, 5));
      .subscribe(posts => this.posts = posts);
  }

  displayComments(postID: number) {
    this.jsonphService.getComments(postID)
    .subscribe(comments => this.comments = comments)
  }


}
