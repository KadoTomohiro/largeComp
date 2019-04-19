import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp724Component } from './comp724.component';

describe('Comp724Component', () => {
  let component: Comp724Component;
  let fixture: ComponentFixture<Comp724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
