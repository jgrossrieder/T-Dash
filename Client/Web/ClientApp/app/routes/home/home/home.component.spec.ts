import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let comp: HomeComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule
            ],
            providers: [],
            declarations: [HomeComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;
    });

    // test access component markup
    it('should contain a valid title', async () => {
        const title = fixture.nativeElement.querySelector('h1').innerHTML;
        expect(title).toBe('Angle');
    });
    // test access component instance variables
    it('should contain a valid data', async () => {
        expect(comp.data).toBe('Angle');
    });

});
