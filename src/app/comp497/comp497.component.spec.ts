import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp497Component } from './comp497.component';

describe('Comp497Component', () => {
  let component: Comp497Component;
  let fixture: ComponentFixture<Comp497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
