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

  private btnValue : String;
  constructor(private jsonphService: JsonphService) { }

  ngOnInit() {
    this.btnValue = "Show comments";
  }

  displayComments(postID: number) {
    if (this.btnValue == "Show comments") {
      this.jsonphService.getComms(postID)
        .subscribe(comms => this.post.comms = comms);
      this.btnValue = "Hide comments";
    } else {
      this.post.comms = [];
      this.btnValue = "Show comments";
    }
  }

  deletePost(postID: number) {
    this.post = null;
    this.jsonphService.deletePost(postID).subscribe();
  }

}