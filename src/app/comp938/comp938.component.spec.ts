import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp938Component } from './comp938.component';

describe('Comp938Component', () => {
  let component: Comp938Component;
  let fixture: ComponentFixture<Comp938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
