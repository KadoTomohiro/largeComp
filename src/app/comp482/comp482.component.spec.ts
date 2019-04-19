import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp482Component } from './comp482.component';

describe('Comp482Component', () => {
  let component: Comp482Component;
  let fixture: ComponentFixture<Comp482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
