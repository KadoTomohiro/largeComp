import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1808Component } from './comp1808.component';

describe('Comp1808Component', () => {
  let component: Comp1808Component;
  let fixture: ComponentFixture<Comp1808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
