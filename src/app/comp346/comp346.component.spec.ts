import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp346Component } from './comp346.component';

describe('Comp346Component', () => {
  let component: Comp346Component;
  let fixture: ComponentFixture<Comp346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
