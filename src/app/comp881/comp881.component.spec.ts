import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp881Component } from './comp881.component';

describe('Comp881Component', () => {
  let component: Comp881Component;
  let fixture: ComponentFixture<Comp881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
