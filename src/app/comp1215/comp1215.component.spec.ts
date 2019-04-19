import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1215Component } from './comp1215.component';

describe('Comp1215Component', () => {
  let component: Comp1215Component;
  let fixture: ComponentFixture<Comp1215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
