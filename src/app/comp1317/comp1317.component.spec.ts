import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1317Component } from './comp1317.component';

describe('Comp1317Component', () => {
  let component: Comp1317Component;
  let fixture: ComponentFixture<Comp1317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
