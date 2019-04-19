import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp834Component } from './comp834.component';

describe('Comp834Component', () => {
  let component: Comp834Component;
  let fixture: ComponentFixture<Comp834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
