import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1410Component } from './comp1410.component';

describe('Comp1410Component', () => {
  let component: Comp1410Component;
  let fixture: ComponentFixture<Comp1410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
