import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1127Component } from './comp1127.component';

describe('Comp1127Component', () => {
  let component: Comp1127Component;
  let fixture: ComponentFixture<Comp1127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
