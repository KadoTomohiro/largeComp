import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp562Component } from './comp562.component';

describe('Comp562Component', () => {
  let component: Comp562Component;
  let fixture: ComponentFixture<Comp562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
