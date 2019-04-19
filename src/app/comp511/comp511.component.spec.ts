import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp511Component } from './comp511.component';

describe('Comp511Component', () => {
  let component: Comp511Component;
  let fixture: ComponentFixture<Comp511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
