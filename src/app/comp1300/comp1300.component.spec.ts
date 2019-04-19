import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1300Component } from './comp1300.component';

describe('Comp1300Component', () => {
  let component: Comp1300Component;
  let fixture: ComponentFixture<Comp1300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
