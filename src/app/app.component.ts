import { 
	Component,
	OnInit } 					from '@angular/core';
import { ModalService } 		from './services/modal.service';
import { BeartModalComponent } 	from './ui-elements/beart-modal/beart-modal.component';

import { ToastrService } 		from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public _isSelected: { currentTab: string };
  public _isToggleSwitched: boolean;
  public _isCheckboxChecked: boolean;
  public _isRadioSelected: boolean;
  public _isSearchSelected: string;

  constructor( private _modalService: ModalService, private _toastr: ToastrService ) {
    this._isSelected = { currentTab: 'default' };
    this._isToggleSwitched = false;
    this._isCheckboxChecked = false;
    this._isRadioSelected = false;
    this._isSearchSelected = null;
  }

  addSubmitAttemptedTrigger() {

    var submitForm = document.getElementById('form');

    var inputValueFirstName = (<HTMLInputElement>document.getElementById('first-name')).value;
    var inputValueSurname = (<HTMLInputElement>document.getElementById('surname')).value;
    alert("Hello! I am an alert box and I use your input \n\r Firstname: " + inputValueFirstName + " \n\r Surname: " + inputValueSurname);

    submitForm.classList.add('_submit-attempted');
  }

  ngOnInit() { }

  // OPEN MODAL WITH COMPONENT INCLUDED
  initLoginModal() {
    let inputs = {
      isMobile: false
    }
    this._modalService.init(BeartModalComponent, inputs, {});
  }

  removeModal() {
    this._modalService.destroy();
  }

  // SHOW TOAST
  showSuccess() {
    this._toastr.success('Hello world!', 'Success!');
  }
  showWarning() {
    this._toastr.warning('Hello world!', 'Warning!');
  }
  showError() {
    this._toastr.error('Hello world!', 'Error!');
  }

  // SET ACTIVE TAB
  refreshTab(category) {
    this._isSelected = { currentTab: category };
  }
}
