import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp348Component } from './comp348.component';

describe('Comp348Component', () => {
  let component: Comp348Component;
  let fixture: ComponentFixture<Comp348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
