import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp903Component } from './comp903.component';

describe('Comp903Component', () => {
  let component: Comp903Component;
  let fixture: ComponentFixture<Comp903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
