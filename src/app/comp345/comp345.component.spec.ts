import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp345Component } from './comp345.component';

describe('Comp345Component', () => {
  let component: Comp345Component;
  let fixture: ComponentFixture<Comp345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
