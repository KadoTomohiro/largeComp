import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1442Component } from './comp1442.component';

describe('Comp1442Component', () => {
  let component: Comp1442Component;
  let fixture: ComponentFixture<Comp1442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
