import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1188Component } from './comp1188.component';

describe('Comp1188Component', () => {
  let component: Comp1188Component;
  let fixture: ComponentFixture<Comp1188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
