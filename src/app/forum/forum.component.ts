import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Observable, Subject } from 'rxjs';

import { Comm } from '../comm';
import { JsonphService } from '../jsonph.service';
import { Post } from '../post';

@Component({
    selector: 'app-forum',
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
    posts: Post[] = [];
    // comments: Comm[] = [];

    heroes$: Observable<Post[]>;
    private searchTerms = new Subject<string>();

    showSearch = false;
    showAdd = false;
    constructor(private jsonphService: JsonphService) {}

    ngOnInit(): void {
        this.getPosts();
    }

    getPosts(): void {
        this.jsonphService
            .getPosts()
            // .subscribe(posts => this.posts = posts.slice(1, 5));
            .subscribe(posts => (this.posts = posts.slice(0, 10)));
    }

    addPost(title: string, body: string): void {
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
        this.searchTerms.next(term);
    }
}
