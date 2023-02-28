import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private POKE_API = 'https://pokeapi.co/api/v2/pokemon';
  private POKE_MOCK_POSTMAN = 'https://a0f770ac-bbe4-4fac-8ee3-c9ec9c380bdd.mock.pstmn.io/charizard';

  constructor(private _http: HttpClient) { }

  getDitto() {
    return this._http.get(`${this.POKE_API}/ditto`);
  }

  getCharizard() {
    return this._http.get(this.POKE_MOCK_POSTMAN);
  }


}
