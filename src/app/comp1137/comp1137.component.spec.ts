import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1137Component } from './comp1137.component';

describe('Comp1137Component', () => {
  let component: Comp1137Component;
  let fixture: ComponentFixture<Comp1137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
