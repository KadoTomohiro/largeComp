import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp822Component } from './comp822.component';

describe('Comp822Component', () => {
  let component: Comp822Component;
  let fixture: ComponentFixture<Comp822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
