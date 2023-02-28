import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-demo-request',
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.scss']
})
export class DemoRequestComponent {

  constructor(private _apiService: ApiService) { }

  clickRequest(): void {
    this._apiService.getDitto().subscribe();
  }

}
