import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'beart-switch-toggle',
  templateUrl: './beart-switch-toggle.component.html',
  styleUrls: ['./beart-switch-toggle.component.scss']
})
export class BeartSwitchToggleComponent implements OnInit {

  @Input() switchToggleId: string;
  @Input() isDisabled: boolean;
  @Input() isSwitched: boolean;
  @Output() isSwitchedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleSwitch() {
    this.isSwitched = !this.isSwitched;
    this.isSwitchedChange.emit(this.isSwitched);
  }

}
