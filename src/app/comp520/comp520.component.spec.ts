import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp520Component } from './comp520.component';

describe('Comp520Component', () => {
  let component: Comp520Component;
  let fixture: ComponentFixture<Comp520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
