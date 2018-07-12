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

  @Input() radioButtonId: string;
  @Input() radioButtonGroup: string;
  @Input() radioButtonValue: string;
  @Input() isDisabled: boolean;
  @Input() isSelected: boolean;
  @Output() isSelectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  changeSelected() {
    this.isSelected = !this.isSelected;
    this.isSelectedChange.emit(this.isSelected);
  }

}
