import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'beart-search-filter-dropdown',
  templateUrl: './beart-search-filter-dropdown.component.html',
  styleUrls: ['./beart-search-filter-dropdown.component.scss']
})
export class BeartSearchFilterDropdownComponent implements OnInit {
  private _mySearch: string;
  private openFilter: boolean;
  private _isValue: string;
  private _isSelected: { currentFilter: string };

  @Input() listItems: Array<string>;
  @Input() isDisabled: Boolean;
  @Input() placeholder: String;
  @Output() isItemSelected: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('document: click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      if(this.openFilter == true) {
        this.openFilter =! this.openFilter;
      }
    }
  }

  constructor(private eRef: ElementRef) {
    this.openFilter = false;
    this._mySearch = null;
    this._isValue = null;
    this._isSelected = { currentFilter: null};
  }

  ngOnInit() {
  }

  /* When the user clicks in the input,
  toggle between hiding and showing the dropdown content */
  openSearchFilter() {
    this.openFilter = !this.openFilter;
  }

  /* When the user select an filter,
  toggle between showing and hiding the dropdown content
  and write selected item through input-field*/
  checkSearchEmpty(event) {
    if (this._mySearch) {
      // enable the button
      return (this._mySearch);
    }
  }

  selectedSearchFilter(filter) {
    /* set selected item as result to input value */
    this._isValue = filter;
    /* reset search input */
    this._mySearch = null;
    /* set current selected item active */
    this._isSelected = { currentFilter: filter };
    /* close list */
    this.openFilter =! this.openFilter;

    this.isItemSelected.emit(this._isValue);
  }

  removeSelected() {
    this._isValue = null;
    this._isSelected = { currentFilter: null};
    this.isItemSelected.emit(this._isValue);
  }
}
