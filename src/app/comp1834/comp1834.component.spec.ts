import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1834Component } from './comp1834.component';

describe('Comp1834Component', () => {
  let component: Comp1834Component;
  let fixture: ComponentFixture<Comp1834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
