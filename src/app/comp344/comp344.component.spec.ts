import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp344Component } from './comp344.component';

describe('Comp344Component', () => {
  let component: Comp344Component;
  let fixture: ComponentFixture<Comp344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
