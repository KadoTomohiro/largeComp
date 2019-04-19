import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp240Component } from './comp240.component';

describe('Comp240Component', () => {
  let component: Comp240Component;
  let fixture: ComponentFixture<Comp240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
