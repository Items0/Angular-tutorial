import { Component, OnInit, Input } from '@angular/core';
import { Comm } from '../comm';
import { JsonphService } from '../jsonph.service';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css']
})
export class CommComponent implements OnInit {

  @Input() comm: Comm;

  constructor(private jsonphService: JsonphService) { }

  ngOnInit() {
  }

  deleteComm(commID:number) {
    this.comm = null;
    this.jsonphService.deleteComm(commID).subscribe();
  }
}
