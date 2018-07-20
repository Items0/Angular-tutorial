import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { JsonphService } from '../jsonph.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;
  constructor(private location: Location, private route: ActivatedRoute, private jsonphService: JsonphService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jsonphService.getPost(id).subscribe(post => (this.post = post));
  }

  save(): void {
    this.jsonphService.updatePost(this.post).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
