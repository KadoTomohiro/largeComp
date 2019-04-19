import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp651Component } from './comp651.component';

describe('Comp651Component', () => {
  let component: Comp651Component;
  let fixture: ComponentFixture<Comp651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
