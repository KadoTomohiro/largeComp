import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp270Component } from './comp270.component';

describe('Comp270Component', () => {
  let component: Comp270Component;
  let fixture: ComponentFixture<Comp270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
