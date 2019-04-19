import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp874Component } from './comp874.component';

describe('Comp874Component', () => {
  let component: Comp874Component;
  let fixture: ComponentFixture<Comp874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
