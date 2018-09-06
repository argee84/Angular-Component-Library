import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'beart-checkbox',
  templateUrl: './beart-checkbox.component.html',
  styleUrls: ['./beart-checkbox.component.scss'],
})
export class BeartCheckboxComponent implements OnInit {

  @Input() checkBoxId: string;
  @Input() isDisabled: boolean;
  @Input() isChecked: boolean;
  @Output() isCheckedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  changeChecked() {
    this.isChecked = !this.isChecked;
    this.isCheckedChange.emit(this.isChecked);
  }

}
