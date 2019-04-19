import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp603Component } from './comp603.component';

describe('Comp603Component', () => {
  let component: Comp603Component;
  let fixture: ComponentFixture<Comp603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
