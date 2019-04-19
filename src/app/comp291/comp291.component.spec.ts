import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp291Component } from './comp291.component';

describe('Comp291Component', () => {
  let component: Comp291Component;
  let fixture: ComponentFixture<Comp291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
