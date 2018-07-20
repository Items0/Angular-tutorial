import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { Observable, Subject } from "rxjs";

import { Comm } from "../comm";
import { JsonphService } from "../jsonph.service";
import { Post } from "../post";
import { MyfilterPipe } from "../myfilter.pipe";
@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.css"]
})
export class ForumComponent implements OnInit {
  posts: Post[] = [];
  postsCopy: Post[] = [];
  registerForm: FormGroup;
  searchForm: FormGroup;
  submitted = false;

  showSearch = false;
  showAdd = false;

  limit: number = 10;

  constructor(
    private jsonphService: JsonphService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.getPosts();
    this.registerForm = this.formBuilder.group({
      titleV: ["", [Validators.required, Validators.minLength(5)]],
      bodyV: ["", [Validators.required, Validators.minLength(15)]]
    });

    this.searchForm = this.formBuilder.group({
      searchV: ["", Validators.minLength(3)]
    });

  }

  getPosts(): void {
    this.jsonphService
      .getPosts()
      //.subscribe(posts => (this.posts = posts.slice(0, 10)));
      .subscribe(posts => (this.posts = posts));

  }

  addPost(title: string, body: string): void {
    // this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const newPost = new Post();
    newPost.title = title;
    newPost.body = body;
    this.jsonphService.addPost(newPost).subscribe(post => {
      // server return fake id = 101
      newPost.id = this.posts.length + 1;
      this.posts.push(newPost);
    });
  }

  searchPostClick(): void {
    this.showSearch = !this.showSearch;
  }

  addPostClick(): void {
    this.showAdd = !this.showAdd;
  }

  search(term: string): void {
    /*
        this.posts = this.posts.filter(element => element.title.includes(term));
        //this.posts = filteredElements;
        console.log("term = " + term);
        //console.log(this.postsCopy);
        */
  }
}
