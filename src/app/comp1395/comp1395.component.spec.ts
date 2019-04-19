import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1395Component } from './comp1395.component';

describe('Comp1395Component', () => {
  let component: Comp1395Component;
  let fixture: ComponentFixture<Comp1395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
