import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp116Component } from './comp116.component';

describe('Comp116Component', () => {
  let component: Comp116Component;
  let fixture: ComponentFixture<Comp116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
