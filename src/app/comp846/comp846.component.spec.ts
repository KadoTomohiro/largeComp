import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp846Component } from './comp846.component';

describe('Comp846Component', () => {
  let component: Comp846Component;
  let fixture: ComponentFixture<Comp846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
