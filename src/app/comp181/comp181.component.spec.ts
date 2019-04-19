import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp181Component } from './comp181.component';

describe('Comp181Component', () => {
  let component: Comp181Component;
  let fixture: ComponentFixture<Comp181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
