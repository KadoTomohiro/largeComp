import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1949Component } from './comp1949.component';

describe('Comp1949Component', () => {
  let component: Comp1949Component;
  let fixture: ComponentFixture<Comp1949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
