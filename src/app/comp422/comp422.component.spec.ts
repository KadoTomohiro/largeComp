import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp422Component } from './comp422.component';

describe('Comp422Component', () => {
  let component: Comp422Component;
  let fixture: ComponentFixture<Comp422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
