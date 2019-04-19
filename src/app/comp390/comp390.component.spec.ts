import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp390Component } from './comp390.component';

describe('Comp390Component', () => {
  let component: Comp390Component;
  let fixture: ComponentFixture<Comp390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
