import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp151Component } from './comp151.component';

describe('Comp151Component', () => {
  let component: Comp151Component;
  let fixture: ComponentFixture<Comp151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
