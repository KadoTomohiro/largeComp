import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp755Component } from './comp755.component';

describe('Comp755Component', () => {
  let component: Comp755Component;
  let fixture: ComponentFixture<Comp755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
