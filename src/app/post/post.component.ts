import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { JsonphService } from '../jsonph.service';
import { Comm } from '../comm';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  
  @Input() post: Post;

  private btnDisplayValue : String;
  private btnEditValue : String;
  constructor(private jsonphService: JsonphService) { }

  ngOnInit() {
    this.btnDisplayValue = "Show comments";
    this.btnEditValue = 'Edit';
  }

  displayComments(postID: number) {
    if (this.btnDisplayValue == "Show comments") {
      this.jsonphService.getComms(postID)
        .subscribe(comms => this.post.comms = comms);
      this.btnDisplayValue = "Hide comments";
    } else {
      this.post.comms = [];
      this.btnDisplayValue = "Show comments";
    }
  }

  deletePost(postID: number) {
    this.post = null;
    this.jsonphService.deletePost(postID).subscribe();
  }

  editPost() {
    if (this.btnEditValue == "Edit") {
      this.btnEditValue = "Save";
    } else {
      this.btnEditValue = "Edit";
      this.jsonphService.updatePost(this.post);
    }
  }

  // save(): void {
  //   this.jsonphService.updateHero(this.hero)
  //     .subscribe(() => this.goBack());
  // }

}