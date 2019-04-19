import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp837Component } from './comp837.component';

describe('Comp837Component', () => {
  let component: Comp837Component;
  let fixture: ComponentFixture<Comp837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
