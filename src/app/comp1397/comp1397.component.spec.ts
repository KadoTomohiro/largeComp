import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1397Component } from './comp1397.component';

describe('Comp1397Component', () => {
  let component: Comp1397Component;
  let fixture: ComponentFixture<Comp1397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
