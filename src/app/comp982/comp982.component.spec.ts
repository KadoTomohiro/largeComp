import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp982Component } from './comp982.component';

describe('Comp982Component', () => {
  let component: Comp982Component;
  let fixture: ComponentFixture<Comp982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
