import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1134Component } from './comp1134.component';

describe('Comp1134Component', () => {
  let component: Comp1134Component;
  let fixture: ComponentFixture<Comp1134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
