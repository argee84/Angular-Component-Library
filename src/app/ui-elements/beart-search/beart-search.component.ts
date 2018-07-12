import {
	Component,
	OnInit,
	Input,
	Output } 			from '@angular/core';
import { FilterPipe }   from '../../pipes/filter.pipe';

@Component({
  selector: 'beart-search',
  templateUrl: './beart-search.component.html',
  styleUrls: ['./beart-search.component.scss'],
})
export class BeartSearchComponent implements OnInit {

  @Input() placeholder: String;

  private _mySearch: string;

  constructor() {
    this._mySearch = '';
  }

  ngOnInit() {
  }

  checkSearchEmpty() {
    if (this._mySearch) {
      // enable the button

      return (this._mySearch);
    }
  }
}
