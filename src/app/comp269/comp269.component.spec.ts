import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp269Component } from './comp269.component';

describe('Comp269Component', () => {
  let component: Comp269Component;
  let fixture: ComponentFixture<Comp269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
