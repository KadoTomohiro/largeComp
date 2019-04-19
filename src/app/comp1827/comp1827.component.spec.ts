import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1827Component } from './comp1827.component';

describe('Comp1827Component', () => {
  let component: Comp1827Component;
  let fixture: ComponentFixture<Comp1827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
