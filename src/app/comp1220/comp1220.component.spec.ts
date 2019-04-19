import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1220Component } from './comp1220.component';

describe('Comp1220Component', () => {
  let component: Comp1220Component;
  let fixture: ComponentFixture<Comp1220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
