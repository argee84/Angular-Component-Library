import {
  Component,
  OnInit,
  Input } from '@angular/core';

@Component({
  selector: 'beart-piechart',
  templateUrl: './beart-piechart.component.html',
  styleUrls: ['./beart-piechart.component.scss']
})
export class BeartPiechartComponent implements OnInit {

  @Input() dataValue: Number;

  constructor() { }

  ngOnInit() {
  }

}
