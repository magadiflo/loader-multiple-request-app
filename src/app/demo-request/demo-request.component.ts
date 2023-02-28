import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-demo-request',
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.scss']
})
export class DemoRequestComponent {

  constructor(private _apiService: ApiService) { }

  /**
   * * Dentro del método simulamos las múltiples peticiones
   */
  clickRequest(): void {
    this._apiService.getDitto().subscribe();
    this._apiService.getCharizard().subscribe();
    this._apiService.getDitto().subscribe();
  }

}
