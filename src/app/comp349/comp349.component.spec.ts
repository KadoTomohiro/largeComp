import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp349Component } from './comp349.component';

describe('Comp349Component', () => {
  let component: Comp349Component;
  let fixture: ComponentFixture<Comp349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
