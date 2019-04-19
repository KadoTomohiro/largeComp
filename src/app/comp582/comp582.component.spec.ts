import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp582Component } from './comp582.component';

describe('Comp582Component', () => {
  let component: Comp582Component;
  let fixture: ComponentFixture<Comp582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
