import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietestComponent } from './movietest.component';

describe('MovietestComponent', () => {
  let component: MovietestComponent;
  let fixture: ComponentFixture<MovietestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovietestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
