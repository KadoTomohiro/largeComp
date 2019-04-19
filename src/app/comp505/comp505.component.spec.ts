import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp505Component } from './comp505.component';

describe('Comp505Component', () => {
  let component: Comp505Component;
  let fixture: ComponentFixture<Comp505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
