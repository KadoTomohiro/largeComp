import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp867Component } from './comp867.component';

describe('Comp867Component', () => {
  let component: Comp867Component;
  let fixture: ComponentFixture<Comp867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
