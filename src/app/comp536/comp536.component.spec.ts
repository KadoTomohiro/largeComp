import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp536Component } from './comp536.component';

describe('Comp536Component', () => {
  let component: Comp536Component;
  let fixture: ComponentFixture<Comp536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
