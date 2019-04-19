import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp224Component } from './comp224.component';

describe('Comp224Component', () => {
  let component: Comp224Component;
  let fixture: ComponentFixture<Comp224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
