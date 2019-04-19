import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp443Component } from './comp443.component';

describe('Comp443Component', () => {
  let component: Comp443Component;
  let fixture: ComponentFixture<Comp443Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp443Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
