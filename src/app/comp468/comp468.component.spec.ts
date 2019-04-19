import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp468Component } from './comp468.component';

describe('Comp468Component', () => {
  let component: Comp468Component;
  let fixture: ComponentFixture<Comp468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
