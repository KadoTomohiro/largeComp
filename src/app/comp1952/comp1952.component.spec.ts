import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1952Component } from './comp1952.component';

describe('Comp1952Component', () => {
  let component: Comp1952Component;
  let fixture: ComponentFixture<Comp1952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
