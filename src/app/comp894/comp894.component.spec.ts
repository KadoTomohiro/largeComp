import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp894Component } from './comp894.component';

describe('Comp894Component', () => {
  let component: Comp894Component;
  let fixture: ComponentFixture<Comp894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
