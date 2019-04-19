import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1291Component } from './comp1291.component';

describe('Comp1291Component', () => {
  let component: Comp1291Component;
  let fixture: ComponentFixture<Comp1291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
