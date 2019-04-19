import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp402Component } from './comp402.component';

describe('Comp402Component', () => {
  let component: Comp402Component;
  let fixture: ComponentFixture<Comp402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
