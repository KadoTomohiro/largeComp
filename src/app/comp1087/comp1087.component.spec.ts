import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1087Component } from './comp1087.component';

describe('Comp1087Component', () => {
  let component: Comp1087Component;
  let fixture: ComponentFixture<Comp1087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
