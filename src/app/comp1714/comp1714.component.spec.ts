import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1714Component } from './comp1714.component';

describe('Comp1714Component', () => {
  let component: Comp1714Component;
  let fixture: ComponentFixture<Comp1714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
