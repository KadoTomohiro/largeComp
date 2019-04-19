import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp686Component } from './comp686.component';

describe('Comp686Component', () => {
  let component: Comp686Component;
  let fixture: ComponentFixture<Comp686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
