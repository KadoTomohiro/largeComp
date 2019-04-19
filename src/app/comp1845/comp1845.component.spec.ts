import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1845Component } from './comp1845.component';

describe('Comp1845Component', () => {
  let component: Comp1845Component;
  let fixture: ComponentFixture<Comp1845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
