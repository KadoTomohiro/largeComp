import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp760Component } from './comp760.component';

describe('Comp760Component', () => {
  let component: Comp760Component;
  let fixture: ComponentFixture<Comp760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
