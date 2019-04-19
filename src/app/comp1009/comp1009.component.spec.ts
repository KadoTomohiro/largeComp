import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1009Component } from './comp1009.component';

describe('Comp1009Component', () => {
  let component: Comp1009Component;
  let fixture: ComponentFixture<Comp1009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
