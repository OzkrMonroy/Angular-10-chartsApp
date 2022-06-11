import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getUsersSocialMedia(): Observable<any>{
    return this.http.get('http://localhost:3000/grafica');
  }
  getUsersToDoughnut(): Observable<any>{
    return this.getUsersSocialMedia().pipe(
      delay(1500),
      map(data => {
        const labels = Object.keys(data);
        const datasets: number[] = Object.values(data);

        return { labels, datasets }
      })
    )
  }
}
