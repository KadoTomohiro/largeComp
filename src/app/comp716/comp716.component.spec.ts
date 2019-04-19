import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp716Component } from './comp716.component';

describe('Comp716Component', () => {
  let component: Comp716Component;
  let fixture: ComponentFixture<Comp716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
