import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp892Component } from './comp892.component';

describe('Comp892Component', () => {
  let component: Comp892Component;
  let fixture: ComponentFixture<Comp892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
