import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp226Component } from './comp226.component';

describe('Comp226Component', () => {
  let component: Comp226Component;
  let fixture: ComponentFixture<Comp226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
