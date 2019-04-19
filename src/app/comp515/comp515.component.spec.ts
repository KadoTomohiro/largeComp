import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp515Component } from './comp515.component';

describe('Comp515Component', () => {
  let component: Comp515Component;
  let fixture: ComponentFixture<Comp515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
