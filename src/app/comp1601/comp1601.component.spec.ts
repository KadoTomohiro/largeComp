import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1601Component } from './comp1601.component';

describe('Comp1601Component', () => {
  let component: Comp1601Component;
  let fixture: ComponentFixture<Comp1601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
