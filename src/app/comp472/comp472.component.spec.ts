import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp472Component } from './comp472.component';

describe('Comp472Component', () => {
  let component: Comp472Component;
  let fixture: ComponentFixture<Comp472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
