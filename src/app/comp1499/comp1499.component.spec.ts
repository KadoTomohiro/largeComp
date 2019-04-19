import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1499Component } from './comp1499.component';

describe('Comp1499Component', () => {
  let component: Comp1499Component;
  let fixture: ComponentFixture<Comp1499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
