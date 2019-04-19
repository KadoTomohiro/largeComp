import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp821Component } from './comp821.component';

describe('Comp821Component', () => {
  let component: Comp821Component;
  let fixture: ComponentFixture<Comp821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
