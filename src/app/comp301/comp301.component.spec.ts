import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp301Component } from './comp301.component';

describe('Comp301Component', () => {
  let component: Comp301Component;
  let fixture: ComponentFixture<Comp301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
