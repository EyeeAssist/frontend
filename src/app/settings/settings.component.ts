import { Component, Inject } from '@angular/core';
import { TokenService } from '../token/token.service';
import { TokenLibraryService } from './token-service/token-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  hide: boolean = true;
  token: string = '';
  constructor(
    @Inject(TokenLibraryService)
    private tokenLibraryService: TokenLibraryService
  ) {
    tokenLibraryService.getLibraryToken().subscribe(response => {
      if (response.status == 200) {
        this.token = response.body as string;
      }
    });
  }
  copiarToClipboard(): void {}
  renewToken(): void {
    this.tokenLibraryService.getLibraryToken().subscribe(response => {
      if (response.status == 200) {
        this.token = response.body as string;
      }
    });
  }
}
