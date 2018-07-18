import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'beart-radiobutton',
  templateUrl: './beart-radiobutton.component.html',
  styleUrls: ['./beart-radiobutton.component.scss']
})
export class BeartRadiobuttonComponent implements OnInit {

  private selectedValue: string;

  @Input() radioButtonList: any;
  @Output() isSelectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.selectedValue = '';
  }

  ngOnInit() {
  }

  changeSelected(val) {
    this.selectedValue = val;
    this.isSelectedChange.emit(this.selectedValue);

    console.log(this.selectedValue);
  }

}
