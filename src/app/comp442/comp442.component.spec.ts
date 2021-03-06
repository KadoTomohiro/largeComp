import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp442Component } from './comp442.component';

describe('Comp442Component', () => {
  let component: Comp442Component;
  let fixture: ComponentFixture<Comp442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
