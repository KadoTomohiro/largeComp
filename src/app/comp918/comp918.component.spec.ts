import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp918Component } from './comp918.component';

describe('Comp918Component', () => {
  let component: Comp918Component;
  let fixture: ComponentFixture<Comp918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
