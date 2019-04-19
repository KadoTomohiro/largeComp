import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1145Component } from './comp1145.component';

describe('Comp1145Component', () => {
  let component: Comp1145Component;
  let fixture: ComponentFixture<Comp1145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
