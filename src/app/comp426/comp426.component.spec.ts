import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp426Component } from './comp426.component';

describe('Comp426Component', () => {
  let component: Comp426Component;
  let fixture: ComponentFixture<Comp426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
