import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp452Component } from './comp452.component';

describe('Comp452Component', () => {
  let component: Comp452Component;
  let fixture: ComponentFixture<Comp452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
