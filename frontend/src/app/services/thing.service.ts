import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThingService {

    private baseUrl = 'http://localhost:9595/api/things';

    constructor(private http: HttpClient) {
    }

    getThing(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    getThingsByName(thingName: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/search/${thingName}`);
    }

    getThingsByNameAndLocation(thingName: string, thingLocation: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${thingName}/location/${thingLocation}`);
    }

    createThing(employee: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, employee);
    }

    updateThing(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteThing(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
    }

    getThingsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
}
