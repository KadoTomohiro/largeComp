import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp197Component } from './comp197.component';

describe('Comp197Component', () => {
  let component: Comp197Component;
  let fixture: ComponentFixture<Comp197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
