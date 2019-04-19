import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp718Component } from './comp718.component';

describe('Comp718Component', () => {
  let component: Comp718Component;
  let fixture: ComponentFixture<Comp718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
