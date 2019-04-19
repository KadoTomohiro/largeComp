import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp234Component } from './comp234.component';

describe('Comp234Component', () => {
  let component: Comp234Component;
  let fixture: ComponentFixture<Comp234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
