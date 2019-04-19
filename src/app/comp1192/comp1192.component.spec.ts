import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1192Component } from './comp1192.component';

describe('Comp1192Component', () => {
  let component: Comp1192Component;
  let fixture: ComponentFixture<Comp1192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
