import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1147Component } from './comp1147.component';

describe('Comp1147Component', () => {
  let component: Comp1147Component;
  let fixture: ComponentFixture<Comp1147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
