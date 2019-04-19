import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp670Component } from './comp670.component';

describe('Comp670Component', () => {
  let component: Comp670Component;
  let fixture: ComponentFixture<Comp670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
