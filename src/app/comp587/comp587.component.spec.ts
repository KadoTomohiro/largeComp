import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp587Component } from './comp587.component';

describe('Comp587Component', () => {
  let component: Comp587Component;
  let fixture: ComponentFixture<Comp587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
