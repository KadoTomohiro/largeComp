import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1411Component } from './comp1411.component';

describe('Comp1411Component', () => {
  let component: Comp1411Component;
  let fixture: ComponentFixture<Comp1411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
