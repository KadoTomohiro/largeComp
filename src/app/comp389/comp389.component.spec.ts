import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp389Component } from './comp389.component';

describe('Comp389Component', () => {
  let component: Comp389Component;
  let fixture: ComponentFixture<Comp389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
