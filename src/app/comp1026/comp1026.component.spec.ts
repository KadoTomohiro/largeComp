import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1026Component } from './comp1026.component';

describe('Comp1026Component', () => {
  let component: Comp1026Component;
  let fixture: ComponentFixture<Comp1026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
