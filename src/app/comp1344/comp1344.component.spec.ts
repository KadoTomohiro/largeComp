import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1344Component } from './comp1344.component';

describe('Comp1344Component', () => {
  let component: Comp1344Component;
  let fixture: ComponentFixture<Comp1344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
