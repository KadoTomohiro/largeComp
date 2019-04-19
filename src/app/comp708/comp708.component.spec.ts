import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp708Component } from './comp708.component';

describe('Comp708Component', () => {
  let component: Comp708Component;
  let fixture: ComponentFixture<Comp708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
