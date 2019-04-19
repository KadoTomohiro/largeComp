import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp171Component } from './comp171.component';

describe('Comp171Component', () => {
  let component: Comp171Component;
  let fixture: ComponentFixture<Comp171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
