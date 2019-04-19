import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp667Component } from './comp667.component';

describe('Comp667Component', () => {
  let component: Comp667Component;
  let fixture: ComponentFixture<Comp667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
