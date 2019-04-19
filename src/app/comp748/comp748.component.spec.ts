import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp748Component } from './comp748.component';

describe('Comp748Component', () => {
  let component: Comp748Component;
  let fixture: ComponentFixture<Comp748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
