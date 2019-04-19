import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp958Component } from './comp958.component';

describe('Comp958Component', () => {
  let component: Comp958Component;
  let fixture: ComponentFixture<Comp958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
