import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1578Component } from './comp1578.component';

describe('Comp1578Component', () => {
  let component: Comp1578Component;
  let fixture: ComponentFixture<Comp1578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
