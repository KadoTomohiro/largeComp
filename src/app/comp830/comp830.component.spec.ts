import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp830Component } from './comp830.component';

describe('Comp830Component', () => {
  let component: Comp830Component;
  let fixture: ComponentFixture<Comp830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
