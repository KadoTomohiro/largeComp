import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1015Component } from './comp1015.component';

describe('Comp1015Component', () => {
  let component: Comp1015Component;
  let fixture: ComponentFixture<Comp1015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
