import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp901Component } from './comp901.component';

describe('Comp901Component', () => {
  let component: Comp901Component;
  let fixture: ComponentFixture<Comp901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
