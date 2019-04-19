import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1341Component } from './comp1341.component';

describe('Comp1341Component', () => {
  let component: Comp1341Component;
  let fixture: ComponentFixture<Comp1341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
