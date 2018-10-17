import {
  Component,
  OnInit,
  Input } from '@angular/core';

@Component({
  selector: 'beart-progressbar',
  templateUrl: './beart-progressbar.component.html',
  styleUrls: ['./beart-progressbar.component.scss']
})
export class BeartProgressbarComponent implements OnInit {

  @Input() dataValue: Number;

  constructor() { }

  ngOnInit() {
  }

}
