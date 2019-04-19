import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp999Component } from './comp999.component';

describe('Comp999Component', () => {
  let component: Comp999Component;
  let fixture: ComponentFixture<Comp999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
