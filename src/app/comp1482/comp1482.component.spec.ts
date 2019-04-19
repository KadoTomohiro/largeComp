import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1482Component } from './comp1482.component';

describe('Comp1482Component', () => {
  let component: Comp1482Component;
  let fixture: ComponentFixture<Comp1482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
