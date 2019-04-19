import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1985Component } from './comp1985.component';

describe('Comp1985Component', () => {
  let component: Comp1985Component;
  let fixture: ComponentFixture<Comp1985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
