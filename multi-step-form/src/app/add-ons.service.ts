import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddOnsService {
  constructor(readonly http: HttpClient) {}

  public getAddOnsData(): Observable<any> {
    return this.http.get<any>('./add-ons-data.json');
  }
}
