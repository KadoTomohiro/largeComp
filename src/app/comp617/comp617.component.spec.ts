import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp617Component } from './comp617.component';

describe('Comp617Component', () => {
  let component: Comp617Component;
  let fixture: ComponentFixture<Comp617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
