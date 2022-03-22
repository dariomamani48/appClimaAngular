import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
key="886818760c221c019f0e71496e8bdf95";
url="https://api.openweathermap.org/data/2.5/weather?&appid=";
  constructor(private http: HttpClient) { }

  getCLima(ciudad: string):Observable<any>{
  const URL = this.url + this.key +"&q=" + ciudad;
  return this.http.get(URL)
  }
}
