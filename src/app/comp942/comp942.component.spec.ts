import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp942Component } from './comp942.component';

describe('Comp942Component', () => {
  let component: Comp942Component;
  let fixture: ComponentFixture<Comp942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
