import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp394Component } from './comp394.component';

describe('Comp394Component', () => {
  let component: Comp394Component;
  let fixture: ComponentFixture<Comp394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
