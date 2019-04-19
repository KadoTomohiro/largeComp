import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp737Component } from './comp737.component';

describe('Comp737Component', () => {
  let component: Comp737Component;
  let fixture: ComponentFixture<Comp737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
