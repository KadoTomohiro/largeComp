import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1177Component } from './comp1177.component';

describe('Comp1177Component', () => {
  let component: Comp1177Component;
  let fixture: ComponentFixture<Comp1177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
