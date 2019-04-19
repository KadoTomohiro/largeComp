import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp854Component } from './comp854.component';

describe('Comp854Component', () => {
  let component: Comp854Component;
  let fixture: ComponentFixture<Comp854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
