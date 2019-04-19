import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1438Component } from './comp1438.component';

describe('Comp1438Component', () => {
  let component: Comp1438Component;
  let fixture: ComponentFixture<Comp1438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
