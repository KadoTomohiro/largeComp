import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp440Component } from './comp440.component';

describe('Comp440Component', () => {
  let component: Comp440Component;
  let fixture: ComponentFixture<Comp440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
