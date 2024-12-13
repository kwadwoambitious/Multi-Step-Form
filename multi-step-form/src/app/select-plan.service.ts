import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectPlanService {
  constructor(readonly http: HttpClient) {}

  public getPlansData(): Observable<any> {
    return this.http.get<any>('./plans-data.json');
  }
}
