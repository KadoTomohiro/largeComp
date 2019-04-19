import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp615Component } from './comp615.component';

describe('Comp615Component', () => {
  let component: Comp615Component;
  let fixture: ComponentFixture<Comp615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
