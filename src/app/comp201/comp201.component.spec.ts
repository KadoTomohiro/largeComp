import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp201Component } from './comp201.component';

describe('Comp201Component', () => {
  let component: Comp201Component;
  let fixture: ComponentFixture<Comp201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
