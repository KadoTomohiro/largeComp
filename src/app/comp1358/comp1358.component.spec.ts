import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1358Component } from './comp1358.component';

describe('Comp1358Component', () => {
  let component: Comp1358Component;
  let fixture: ComponentFixture<Comp1358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
