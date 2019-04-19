import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp480Component } from './comp480.component';

describe('Comp480Component', () => {
  let component: Comp480Component;
  let fixture: ComponentFixture<Comp480Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp480Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
