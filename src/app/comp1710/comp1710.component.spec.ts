import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1710Component } from './comp1710.component';

describe('Comp1710Component', () => {
  let component: Comp1710Component;
  let fixture: ComponentFixture<Comp1710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
