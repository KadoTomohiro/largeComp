import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1163Component } from './comp1163.component';

describe('Comp1163Component', () => {
  let component: Comp1163Component;
  let fixture: ComponentFixture<Comp1163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
