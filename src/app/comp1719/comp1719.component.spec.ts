import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1719Component } from './comp1719.component';

describe('Comp1719Component', () => {
  let component: Comp1719Component;
  let fixture: ComponentFixture<Comp1719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
