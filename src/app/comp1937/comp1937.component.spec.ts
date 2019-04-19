import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1937Component } from './comp1937.component';

describe('Comp1937Component', () => {
  let component: Comp1937Component;
  let fixture: ComponentFixture<Comp1937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
