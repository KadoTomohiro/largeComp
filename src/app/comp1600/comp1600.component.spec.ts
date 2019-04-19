import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1600Component } from './comp1600.component';

describe('Comp1600Component', () => {
  let component: Comp1600Component;
  let fixture: ComponentFixture<Comp1600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
