import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1269Component } from './comp1269.component';

describe('Comp1269Component', () => {
  let component: Comp1269Component;
  let fixture: ComponentFixture<Comp1269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
