import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1860Component } from './comp1860.component';

describe('Comp1860Component', () => {
  let component: Comp1860Component;
  let fixture: ComponentFixture<Comp1860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
