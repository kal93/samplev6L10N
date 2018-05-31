import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatCheckboxChange, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';

import { LocaleService, TranslationService, Language  } from 'angular-l10n';
import { ISubscription } from 'rxjs/Subscription';

import { SqSelectSettingsModel } from 'sqvue';

@Component({
  selector: 'app-tab-a',
  templateUrl: './tab-a.component.html',
  styleUrls: ['./tab-a.component.css']
})
export class TabAComponent implements OnInit, DoCheck {

  @Language() lang: string;

  Angulari18nlocale: string;

  subscription: ISubscription;

  today = Date.now();
  a  = '222';

  sqChecked = false;

  sqHidListConfig: SqSelectSettingsModel = <SqSelectSettingsModel>{};

  searchForm: FormGroup;

  LastName: string;
  FirstName: string;
  MiddleName: string;
  PatientID: string;
  NHS: string;
  SelectHID: string;
  BillingAccountNumber: string;

  sqSelectvalidationMessage: string;

  constructor( private formBuilder: FormBuilder, public locale: LocaleService, public translation: TranslationService ) {

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
      // code translations i.e property bindings,complex objects
       this.translation.translationChanged().subscribe(
        () => {
          // change the locale for the angluar i18n pipes
            this.Angulari18nlocale = this.lang;
          // l10n tranlation service
          this.LastName = this.translation.translate('LastName');
          this.FirstName = this.translation.translate('FirstName');
          this.MiddleName = this.translation.translate('MiddleName');
          this.PatientID = this.translation.translate('PatientID');
          this.NHS = this.translation.translate('NHS');
          this.SelectHID = this.translation.translate('SelectHID');
          this.BillingAccountNumber = this.translation.translate('BillingAccountNumber');
        }
      );

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
