import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp527Component } from './comp527.component';

describe('Comp527Component', () => {
  let component: Comp527Component;
  let fixture: ComponentFixture<Comp527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
