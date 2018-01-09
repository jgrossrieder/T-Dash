import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import Horoscope = require("./horoscope");
import IHoroscope = Horoscope.Horoscope;

@Injectable()
export class AstroService {

    constructor(private _http: Http) {}
    get() {
        return this._http.get('api/astro/get')
            .map((res: Response) => {
                return  res.json();
            });
    } 
}