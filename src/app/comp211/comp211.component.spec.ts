import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp211Component } from './comp211.component';

describe('Comp211Component', () => {
  let component: Comp211Component;
  let fixture: ComponentFixture<Comp211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
