import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1924Component } from './comp1924.component';

describe('Comp1924Component', () => {
  let component: Comp1924Component;
  let fixture: ComponentFixture<Comp1924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
