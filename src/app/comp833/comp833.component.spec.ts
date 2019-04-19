import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp833Component } from './comp833.component';

describe('Comp833Component', () => {
  let component: Comp833Component;
  let fixture: ComponentFixture<Comp833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
