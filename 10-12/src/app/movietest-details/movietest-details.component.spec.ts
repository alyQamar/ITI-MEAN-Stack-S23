import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietestDetailsComponent } from './movietest-details.component';

describe('MovietestDetailsComponent', () => {
  let component: MovietestDetailsComponent;
  let fixture: ComponentFixture<MovietestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovietestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovietestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
