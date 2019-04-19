import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1171Component } from './comp1171.component';

describe('Comp1171Component', () => {
  let component: Comp1171Component;
  let fixture: ComponentFixture<Comp1171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
