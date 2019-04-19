import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp734Component } from './comp734.component';

describe('Comp734Component', () => {
  let component: Comp734Component;
  let fixture: ComponentFixture<Comp734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
