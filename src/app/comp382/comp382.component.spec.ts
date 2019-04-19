import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp382Component } from './comp382.component';

describe('Comp382Component', () => {
  let component: Comp382Component;
  let fixture: ComponentFixture<Comp382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
