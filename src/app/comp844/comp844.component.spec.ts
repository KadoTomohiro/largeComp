import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp844Component } from './comp844.component';

describe('Comp844Component', () => {
  let component: Comp844Component;
  let fixture: ComponentFixture<Comp844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
