import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp215Component } from './comp215.component';

describe('Comp215Component', () => {
  let component: Comp215Component;
  let fixture: ComponentFixture<Comp215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
