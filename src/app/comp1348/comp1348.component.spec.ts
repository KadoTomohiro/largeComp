import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1348Component } from './comp1348.component';

describe('Comp1348Component', () => {
  let component: Comp1348Component;
  let fixture: ComponentFixture<Comp1348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
