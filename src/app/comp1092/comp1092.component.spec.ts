import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1092Component } from './comp1092.component';

describe('Comp1092Component', () => {
  let component: Comp1092Component;
  let fixture: ComponentFixture<Comp1092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
