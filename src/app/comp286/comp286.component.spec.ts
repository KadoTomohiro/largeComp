import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp286Component } from './comp286.component';

describe('Comp286Component', () => {
  let component: Comp286Component;
  let fixture: ComponentFixture<Comp286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
