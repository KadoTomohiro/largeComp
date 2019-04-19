import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp605Component } from './comp605.component';

describe('Comp605Component', () => {
  let component: Comp605Component;
  let fixture: ComponentFixture<Comp605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
