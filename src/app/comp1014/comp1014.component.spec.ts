import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1014Component } from './comp1014.component';

describe('Comp1014Component', () => {
  let component: Comp1014Component;
  let fixture: ComponentFixture<Comp1014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
