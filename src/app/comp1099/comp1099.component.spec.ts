import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1099Component } from './comp1099.component';

describe('Comp1099Component', () => {
  let component: Comp1099Component;
  let fixture: ComponentFixture<Comp1099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
