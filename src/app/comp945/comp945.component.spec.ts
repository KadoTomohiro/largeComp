import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp945Component } from './comp945.component';

describe('Comp945Component', () => {
  let component: Comp945Component;
  let fixture: ComponentFixture<Comp945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
