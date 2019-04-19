import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp862Component } from './comp862.component';

describe('Comp862Component', () => {
  let component: Comp862Component;
  let fixture: ComponentFixture<Comp862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
