import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp509Component } from './comp509.component';

describe('Comp509Component', () => {
  let component: Comp509Component;
  let fixture: ComponentFixture<Comp509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
