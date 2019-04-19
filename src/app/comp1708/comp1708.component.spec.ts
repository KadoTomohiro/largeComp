import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1708Component } from './comp1708.component';

describe('Comp1708Component', () => {
  let component: Comp1708Component;
  let fixture: ComponentFixture<Comp1708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
