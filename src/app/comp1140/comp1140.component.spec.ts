import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1140Component } from './comp1140.component';

describe('Comp1140Component', () => {
  let component: Comp1140Component;
  let fixture: ComponentFixture<Comp1140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
