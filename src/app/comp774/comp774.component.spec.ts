import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp774Component } from './comp774.component';

describe('Comp774Component', () => {
  let component: Comp774Component;
  let fixture: ComponentFixture<Comp774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
