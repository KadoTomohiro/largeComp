import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1488Component } from './comp1488.component';

describe('Comp1488Component', () => {
  let component: Comp1488Component;
  let fixture: ComponentFixture<Comp1488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
