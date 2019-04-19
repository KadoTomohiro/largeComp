import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp829Component } from './comp829.component';

describe('Comp829Component', () => {
  let component: Comp829Component;
  let fixture: ComponentFixture<Comp829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
