import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1567Component } from './comp1567.component';

describe('Comp1567Component', () => {
  let component: Comp1567Component;
  let fixture: ComponentFixture<Comp1567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
