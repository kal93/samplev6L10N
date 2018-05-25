import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

import { SqSelectSettingsModel } from 'sqvue';

@Component({
  selector: 'app-tab-a',
  templateUrl: './tab-a.component.html',
  styleUrls: ['./tab-a.component.css']
})
export class TabAComponent implements OnInit, DoCheck {
  sqChecked = false;

  sqHidListConfig: SqSelectSettingsModel = <SqSelectSettingsModel>{};

  searchForm: FormGroup;

  sqSelectvalidationMessage: string;

  constructor( private formBuilder: FormBuilder ) {

    this.searchForm = formBuilder.group({
      'lastName': new FormControl(),
      'firstName': new FormControl(),
      'middleName': new FormControl(),
      'checkAllCheckBox': new FormControl(),
      'hidList': new FormControl(),
      'patientId': new FormControl(''),
      'nhsNo': new FormControl(''),
      'billAccount': new FormControl(''),
    });

  }


  ngOnInit() {
    this.sqHidListConfig.dataSource = [
      { value: 'HID1', viewValue: 'HID1' },
      { value: 'HID2', viewValue: 'HID3' },
      { value: 'HID3', viewValue: 'HID3' }
      ];
   }
  ngDoCheck() {
    this.sqSelectvalidationMessage = this.searchForm.get('hidList').hasError('required') ? 'This is Required' : '';
}

    // event emitted when checkbox is clicked
    sqChange(event: MatCheckboxChange) {
      this.sqChecked = event.checked;
      console.log('Checkbox changed to ' + this.sqChecked);
  }

  submitForm() {
      console.log(`Submit Form ${JSON.stringify(this.searchForm.value)}`);
  }

}
