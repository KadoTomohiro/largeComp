import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp168Component } from './comp168.component';

describe('Comp168Component', () => {
  let component: Comp168Component;
  let fixture: ComponentFixture<Comp168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
