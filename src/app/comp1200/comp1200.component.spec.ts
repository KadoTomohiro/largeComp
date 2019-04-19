import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1200Component } from './comp1200.component';

describe('Comp1200Component', () => {
  let component: Comp1200Component;
  let fixture: ComponentFixture<Comp1200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
