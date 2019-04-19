import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp581Component } from './comp581.component';

describe('Comp581Component', () => {
  let component: Comp581Component;
  let fixture: ComponentFixture<Comp581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
