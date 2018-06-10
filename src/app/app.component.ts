import { Component } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Language() lang: string;
  title = 'app';

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
