import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1785Component } from './comp1785.component';

describe('Comp1785Component', () => {
  let component: Comp1785Component;
  let fixture: ComponentFixture<Comp1785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
