import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp882Component } from './comp882.component';

describe('Comp882Component', () => {
  let component: Comp882Component;
  let fixture: ComponentFixture<Comp882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
