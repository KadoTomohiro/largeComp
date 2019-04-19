import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp661Component } from './comp661.component';

describe('Comp661Component', () => {
  let component: Comp661Component;
  let fixture: ComponentFixture<Comp661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
