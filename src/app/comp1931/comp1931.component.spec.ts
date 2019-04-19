import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1931Component } from './comp1931.component';

describe('Comp1931Component', () => {
  let component: Comp1931Component;
  let fixture: ComponentFixture<Comp1931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
