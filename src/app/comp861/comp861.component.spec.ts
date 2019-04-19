import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp861Component } from './comp861.component';

describe('Comp861Component', () => {
  let component: Comp861Component;
  let fixture: ComponentFixture<Comp861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
