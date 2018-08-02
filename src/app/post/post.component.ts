import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Comm } from '../comm';
import { JsonphService } from '../jsonph.service';
import { Post } from '../post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    private btnDisplayValue: String;
    private btnEditValue: String;
    constructor(private jsonphService: JsonphService) { }

    ngOnInit(): void {
        this.btnDisplayValue = 'Show comments';
        this.btnEditValue = 'Edit';
    }

    displayComments(postID: number): void {
        if (this.btnDisplayValue === 'Show comments') {
            this.jsonphService.getComms(postID).subscribe(comms => (this.post.comms = comms));
            this.btnDisplayValue = 'Hide comments';
        } else {
            this.post.comms = [];
            this.btnDisplayValue = 'Show comments';
        }
    }

    deletePost(postID: number): void {
        this.post = null;
        this.jsonphService.deletePost(postID).subscribe();
    }

    editPost(): void {
        if (this.btnEditValue === 'Edit') {
            this.btnEditValue = 'Save';
        } else {
            this.btnEditValue = 'Edit';
            this.jsonphService.updatePost(this.post);
        }
    }

    save(): void {
        this.jsonphService.updatePost(this.post);
    }
}
