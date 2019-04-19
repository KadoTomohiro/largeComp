import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1212Component } from './comp1212.component';

describe('Comp1212Component', () => {
  let component: Comp1212Component;
  let fixture: ComponentFixture<Comp1212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
