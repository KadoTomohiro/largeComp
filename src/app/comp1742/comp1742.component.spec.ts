import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1742Component } from './comp1742.component';

describe('Comp1742Component', () => {
  let component: Comp1742Component;
  let fixture: ComponentFixture<Comp1742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
