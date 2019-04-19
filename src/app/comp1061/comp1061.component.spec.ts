import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1061Component } from './comp1061.component';

describe('Comp1061Component', () => {
  let component: Comp1061Component;
  let fixture: ComponentFixture<Comp1061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
