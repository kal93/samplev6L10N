import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LocaleService, TranslationService, Language  } from 'angular-l10n';

import { Direction } from '@angular/cdk/bidi';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @Language() lang: string;

    title: string;

    dir: Direction;

    subscription: ISubscription;

    constructor(public locale: LocaleService, public translation: TranslationService) { }

    ngOnInit(): void {
         // When the language changes, refreshes the document title with the new translation.
       this.subscription = this.translation.translationChanged().subscribe(
            () => { this.title = this.translation.translate('Title'); }
        );

        // Initializes direction.
        this.dir = this.getLanguageDirection();
    }

    ngOnDestroy(): void {
                this.subscription.unsubscribe();
    }

    selectLanguage(language: string): void {
        this.locale.setCurrentLanguage(language);
        console.log(this.dir);
    }

    getLanguageDirection(language?: string) {
        console.log(language);
        console.log(this.locale.getLanguageDirection(language) as Direction);
        return this.locale.getLanguageDirection(language) as Direction;
    }

}
