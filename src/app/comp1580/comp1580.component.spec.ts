import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1580Component } from './comp1580.component';

describe('Comp1580Component', () => {
  let component: Comp1580Component;
  let fixture: ComponentFixture<Comp1580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
