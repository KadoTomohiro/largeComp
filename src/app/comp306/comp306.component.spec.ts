import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp306Component } from './comp306.component';

describe('Comp306Component', () => {
  let component: Comp306Component;
  let fixture: ComponentFixture<Comp306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
