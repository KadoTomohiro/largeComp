import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp780Component } from './comp780.component';

describe('Comp780Component', () => {
  let component: Comp780Component;
  let fixture: ComponentFixture<Comp780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
