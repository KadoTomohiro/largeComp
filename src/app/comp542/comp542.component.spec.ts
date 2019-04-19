import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp542Component } from './comp542.component';

describe('Comp542Component', () => {
  let component: Comp542Component;
  let fixture: ComponentFixture<Comp542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
