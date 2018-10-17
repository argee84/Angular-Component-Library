import {
  Component,
  OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'beart-modal',
  templateUrl: './beart-modal.component.html',
  styleUrls: ['./beart-modal.component.scss']
})
export class BeartModalComponent implements OnInit {

  constructor( private _modalService: ModalService ) { }

  ngOnInit() { }

  public close() {
    this._modalService.destroy();
  }

}
