import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp209Component } from './comp209.component';

describe('Comp209Component', () => {
  let component: Comp209Component;
  let fixture: ComponentFixture<Comp209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
