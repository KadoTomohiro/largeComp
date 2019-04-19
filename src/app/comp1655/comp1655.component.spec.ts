import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1655Component } from './comp1655.component';

describe('Comp1655Component', () => {
  let component: Comp1655Component;
  let fixture: ComponentFixture<Comp1655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
