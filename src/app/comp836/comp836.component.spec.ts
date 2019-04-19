import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp836Component } from './comp836.component';

describe('Comp836Component', () => {
  let component: Comp836Component;
  let fixture: ComponentFixture<Comp836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
