import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1632Component } from './comp1632.component';

describe('Comp1632Component', () => {
  let component: Comp1632Component;
  let fixture: ComponentFixture<Comp1632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
