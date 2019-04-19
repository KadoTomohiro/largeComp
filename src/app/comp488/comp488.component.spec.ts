import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp488Component } from './comp488.component';

describe('Comp488Component', () => {
  let component: Comp488Component;
  let fixture: ComponentFixture<Comp488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
