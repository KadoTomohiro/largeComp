import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp558Component } from './comp558.component';

describe('Comp558Component', () => {
  let component: Comp558Component;
  let fixture: ComponentFixture<Comp558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
