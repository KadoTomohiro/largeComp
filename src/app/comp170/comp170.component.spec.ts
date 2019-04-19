import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp170Component } from './comp170.component';

describe('Comp170Component', () => {
  let component: Comp170Component;
  let fixture: ComponentFixture<Comp170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
