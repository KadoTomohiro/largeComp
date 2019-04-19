import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1421Component } from './comp1421.component';

describe('Comp1421Component', () => {
  let component: Comp1421Component;
  let fixture: ComponentFixture<Comp1421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
