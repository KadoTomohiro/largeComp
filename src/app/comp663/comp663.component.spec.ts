import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp663Component } from './comp663.component';

describe('Comp663Component', () => {
  let component: Comp663Component;
  let fixture: ComponentFixture<Comp663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
