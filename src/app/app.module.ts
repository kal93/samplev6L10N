import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { SqCardModule, SqButtonModule, SqTextboxModule, SqSelectModule, SqCheckboxModule } from 'sqvue';

import { L10nConfig, L10nLoader, TranslationModule, StorageStrategy, ProviderType} from 'angular-l10n';
import { TabAComponent } from './tab-a/tab-a.component';

const l10nConfig: L10nConfig = {
    locale: {
      languages : [
        { code: 'en', dir: 'ltr'},
        {code: 'it', dir: 'ltr'},
        {code: 'ar', dir: 'rtl'}
      ],
      language : 'en',
      storage: StorageStrategy.Cookie
    },
    translation : {
      providers: [ { type: ProviderType.Static, prefix: './assets/locale-'} ],
      caching: true,
      missingValue: 'No Key'
    }
};

const routes = [

   {
     path: 'i18n',
     component : TabAComponent
   },
  // Default route
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'i18n'
  },

 ];
@NgModule({
  declarations: [
    AppComponent,
    TabAComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslationModule.forRoot(l10nConfig),
    MatInputModule,
    SqCardModule,
    SqButtonModule,
    SqTextboxModule,
    SqSelectModule,
    SqCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public l10nLoader: L10nLoader) {
      this.l10nLoader.load();
  }
}
