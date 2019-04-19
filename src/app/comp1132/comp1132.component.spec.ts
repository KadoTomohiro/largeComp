import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1132Component } from './comp1132.component';

describe('Comp1132Component', () => {
  let component: Comp1132Component;
  let fixture: ComponentFixture<Comp1132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
