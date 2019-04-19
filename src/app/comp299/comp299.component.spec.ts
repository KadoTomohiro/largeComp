import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp299Component } from './comp299.component';

describe('Comp299Component', () => {
  let component: Comp299Component;
  let fixture: ComponentFixture<Comp299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
