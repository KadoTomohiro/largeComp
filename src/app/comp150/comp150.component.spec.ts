import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp150Component } from './comp150.component';

describe('Comp150Component', () => {
  let component: Comp150Component;
  let fixture: ComponentFixture<Comp150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
