import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp220Component } from './comp220.component';

describe('Comp220Component', () => {
  let component: Comp220Component;
  let fixture: ComponentFixture<Comp220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
