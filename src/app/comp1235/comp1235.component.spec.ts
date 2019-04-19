import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1235Component } from './comp1235.component';

describe('Comp1235Component', () => {
  let component: Comp1235Component;
  let fixture: ComponentFixture<Comp1235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
