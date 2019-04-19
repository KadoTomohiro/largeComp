import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp787Component } from './comp787.component';

describe('Comp787Component', () => {
  let component: Comp787Component;
  let fixture: ComponentFixture<Comp787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
