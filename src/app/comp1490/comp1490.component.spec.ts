import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1490Component } from './comp1490.component';

describe('Comp1490Component', () => {
  let component: Comp1490Component;
  let fixture: ComponentFixture<Comp1490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
