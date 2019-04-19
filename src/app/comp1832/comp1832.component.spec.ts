import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1832Component } from './comp1832.component';

describe('Comp1832Component', () => {
  let component: Comp1832Component;
  let fixture: ComponentFixture<Comp1832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
