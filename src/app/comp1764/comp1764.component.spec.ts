import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1764Component } from './comp1764.component';

describe('Comp1764Component', () => {
  let component: Comp1764Component;
  let fixture: ComponentFixture<Comp1764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
