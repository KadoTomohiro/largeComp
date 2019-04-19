import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1349Component } from './comp1349.component';

describe('Comp1349Component', () => {
  let component: Comp1349Component;
  let fixture: ComponentFixture<Comp1349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
