import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1718Component } from './comp1718.component';

describe('Comp1718Component', () => {
  let component: Comp1718Component;
  let fixture: ComponentFixture<Comp1718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
