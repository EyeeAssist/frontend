import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/token/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenLibraryService {
  private apiUrl = environment.domain;
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  getLibraryToken() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    });
    return this.http.get<string>(`${this.apiUrl}/mi-token`, {
      observe: 'response',
      headers: headers,
      responseType: 'text' as 'json',
    });
  }
}
