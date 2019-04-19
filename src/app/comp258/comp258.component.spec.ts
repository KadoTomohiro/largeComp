import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp258Component } from './comp258.component';

describe('Comp258Component', () => {
  let component: Comp258Component;
  let fixture: ComponentFixture<Comp258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
