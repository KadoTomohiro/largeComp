import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1771Component } from './comp1771.component';

describe('Comp1771Component', () => {
  let component: Comp1771Component;
  let fixture: ComponentFixture<Comp1771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
