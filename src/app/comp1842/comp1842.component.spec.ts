import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1842Component } from './comp1842.component';

describe('Comp1842Component', () => {
  let component: Comp1842Component;
  let fixture: ComponentFixture<Comp1842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
