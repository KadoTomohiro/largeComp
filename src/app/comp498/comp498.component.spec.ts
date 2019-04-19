import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp498Component } from './comp498.component';

describe('Comp498Component', () => {
  let component: Comp498Component;
  let fixture: ComponentFixture<Comp498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
