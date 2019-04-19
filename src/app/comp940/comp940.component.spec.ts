import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp940Component } from './comp940.component';

describe('Comp940Component', () => {
  let component: Comp940Component;
  let fixture: ComponentFixture<Comp940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
