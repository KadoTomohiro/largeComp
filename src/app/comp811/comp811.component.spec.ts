import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp811Component } from './comp811.component';

describe('Comp811Component', () => {
  let component: Comp811Component;
  let fixture: ComponentFixture<Comp811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
