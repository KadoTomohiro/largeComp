import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1874Component } from './comp1874.component';

describe('Comp1874Component', () => {
  let component: Comp1874Component;
  let fixture: ComponentFixture<Comp1874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
