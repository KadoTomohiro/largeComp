import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1059Component } from './comp1059.component';

describe('Comp1059Component', () => {
  let component: Comp1059Component;
  let fixture: ComponentFixture<Comp1059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
