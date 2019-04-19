import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp213Component } from './comp213.component';

describe('Comp213Component', () => {
  let component: Comp213Component;
  let fixture: ComponentFixture<Comp213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
