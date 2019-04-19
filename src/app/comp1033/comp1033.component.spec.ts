import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1033Component } from './comp1033.component';

describe('Comp1033Component', () => {
  let component: Comp1033Component;
  let fixture: ComponentFixture<Comp1033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
