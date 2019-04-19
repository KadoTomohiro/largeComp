import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp378Component } from './comp378.component';

describe('Comp378Component', () => {
  let component: Comp378Component;
  let fixture: ComponentFixture<Comp378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
