import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp263Component } from './comp263.component';

describe('Comp263Component', () => {
  let component: Comp263Component;
  let fixture: ComponentFixture<Comp263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
