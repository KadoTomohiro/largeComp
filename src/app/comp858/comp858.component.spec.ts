import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp858Component } from './comp858.component';

describe('Comp858Component', () => {
  let component: Comp858Component;
  let fixture: ComponentFixture<Comp858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
