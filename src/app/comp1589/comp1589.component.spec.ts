import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1589Component } from './comp1589.component';

describe('Comp1589Component', () => {
  let component: Comp1589Component;
  let fixture: ComponentFixture<Comp1589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
