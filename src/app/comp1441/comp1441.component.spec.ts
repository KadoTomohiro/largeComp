import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1441Component } from './comp1441.component';

describe('Comp1441Component', () => {
  let component: Comp1441Component;
  let fixture: ComponentFixture<Comp1441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
