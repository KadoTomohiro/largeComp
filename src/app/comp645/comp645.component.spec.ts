import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp645Component } from './comp645.component';

describe('Comp645Component', () => {
  let component: Comp645Component;
  let fixture: ComponentFixture<Comp645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
