import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1672Component } from './comp1672.component';

describe('Comp1672Component', () => {
  let component: Comp1672Component;
  let fixture: ComponentFixture<Comp1672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
