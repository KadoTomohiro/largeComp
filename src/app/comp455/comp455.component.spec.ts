import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp455Component } from './comp455.component';

describe('Comp455Component', () => {
  let component: Comp455Component;
  let fixture: ComponentFixture<Comp455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
