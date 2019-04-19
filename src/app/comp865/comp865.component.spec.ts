import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp865Component } from './comp865.component';

describe('Comp865Component', () => {
  let component: Comp865Component;
  let fixture: ComponentFixture<Comp865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
