import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1028Component } from './comp1028.component';

describe('Comp1028Component', () => {
  let component: Comp1028Component;
  let fixture: ComponentFixture<Comp1028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
