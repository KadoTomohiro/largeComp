import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp636Component } from './comp636.component';

describe('Comp636Component', () => {
  let component: Comp636Component;
  let fixture: ComponentFixture<Comp636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
