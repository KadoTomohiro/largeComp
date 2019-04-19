import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp176Component } from './comp176.component';

describe('Comp176Component', () => {
  let component: Comp176Component;
  let fixture: ComponentFixture<Comp176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
