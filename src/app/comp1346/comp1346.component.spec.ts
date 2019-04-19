import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1346Component } from './comp1346.component';

describe('Comp1346Component', () => {
  let component: Comp1346Component;
  let fixture: ComponentFixture<Comp1346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
