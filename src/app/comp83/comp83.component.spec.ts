import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp83Component } from './comp83.component';

describe('Comp83Component', () => {
  let component: Comp83Component;
  let fixture: ComponentFixture<Comp83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
