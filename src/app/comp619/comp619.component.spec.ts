import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp619Component } from './comp619.component';

describe('Comp619Component', () => {
  let component: Comp619Component;
  let fixture: ComponentFixture<Comp619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
