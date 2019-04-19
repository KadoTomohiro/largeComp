import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp529Component } from './comp529.component';

describe('Comp529Component', () => {
  let component: Comp529Component;
  let fixture: ComponentFixture<Comp529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
