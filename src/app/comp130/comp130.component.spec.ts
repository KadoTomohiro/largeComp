import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp130Component } from './comp130.component';

describe('Comp130Component', () => {
  let component: Comp130Component;
  let fixture: ComponentFixture<Comp130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
