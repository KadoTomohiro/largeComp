import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp561Component } from './comp561.component';

describe('Comp561Component', () => {
  let component: Comp561Component;
  let fixture: ComponentFixture<Comp561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
