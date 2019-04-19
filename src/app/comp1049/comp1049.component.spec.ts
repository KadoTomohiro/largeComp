import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1049Component } from './comp1049.component';

describe('Comp1049Component', () => {
  let component: Comp1049Component;
  let fixture: ComponentFixture<Comp1049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
