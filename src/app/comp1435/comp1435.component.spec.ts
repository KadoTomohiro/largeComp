import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1435Component } from './comp1435.component';

describe('Comp1435Component', () => {
  let component: Comp1435Component;
  let fixture: ComponentFixture<Comp1435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
