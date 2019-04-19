import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1427Component } from './comp1427.component';

describe('Comp1427Component', () => {
  let component: Comp1427Component;
  let fixture: ComponentFixture<Comp1427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
