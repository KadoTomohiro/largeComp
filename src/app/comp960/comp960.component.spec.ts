import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp960Component } from './comp960.component';

describe('Comp960Component', () => {
  let component: Comp960Component;
  let fixture: ComponentFixture<Comp960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
