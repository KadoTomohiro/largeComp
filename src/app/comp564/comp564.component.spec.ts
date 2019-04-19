import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp564Component } from './comp564.component';

describe('Comp564Component', () => {
  let component: Comp564Component;
  let fixture: ComponentFixture<Comp564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
