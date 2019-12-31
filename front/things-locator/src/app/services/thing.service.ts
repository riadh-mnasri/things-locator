import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/things';

  constructor(private http: HttpClient) { }

  getThing(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createThing(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateThing(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteThing(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getThingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
