import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp117Component } from './comp117.component';

describe('Comp117Component', () => {
  let component: Comp117Component;
  let fixture: ComponentFixture<Comp117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
