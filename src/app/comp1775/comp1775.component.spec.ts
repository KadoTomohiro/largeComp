import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1775Component } from './comp1775.component';

describe('Comp1775Component', () => {
  let component: Comp1775Component;
  let fixture: ComponentFixture<Comp1775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
