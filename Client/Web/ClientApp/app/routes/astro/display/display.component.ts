import { Component } from '@angular/core';
import {AstroService} from '../astro.service'
import Horoscope = require("../horoscope");
import { Observable } from 'rxjs/Observable';
import IHoroscope = Horoscope.Horoscope;

@Component({
    selector: 'display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})


export class DisplayComponent {
    horoscopes: any = null;

    constructor(private astroService:AstroService) {
        this.astroService.get()
            .subscribe(data => {
                console.log(data);
                this.horoscopes = data;
            });
    }
}