import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1111Component } from './comp1111.component';

describe('Comp1111Component', () => {
  let component: Comp1111Component;
  let fixture: ComponentFixture<Comp1111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
