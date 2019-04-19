import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp357Component } from './comp357.component';

describe('Comp357Component', () => {
  let component: Comp357Component;
  let fixture: ComponentFixture<Comp357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
