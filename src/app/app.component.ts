import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LocaleService, TranslationService, Language  } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Language() lang: string;

    title: string;

    constructor(public locale: LocaleService, public translation: TranslationService) { }

    ngOnInit(): void {
        this.translation.translationChanged().subscribe(
            () => { this.title = this.translation.translate('Title'); }
        );
    }

    selectLanguage(language: string): void {
        this.locale.setCurrentLanguage(language);
    }

}
