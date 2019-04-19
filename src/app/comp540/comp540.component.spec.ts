import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp540Component } from './comp540.component';

describe('Comp540Component', () => {
  let component: Comp540Component;
  let fixture: ComponentFixture<Comp540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
