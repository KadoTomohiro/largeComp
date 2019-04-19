import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1768Component } from './comp1768.component';

describe('Comp1768Component', () => {
  let component: Comp1768Component;
  let fixture: ComponentFixture<Comp1768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
