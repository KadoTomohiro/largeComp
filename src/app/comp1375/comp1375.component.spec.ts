import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1375Component } from './comp1375.component';

describe('Comp1375Component', () => {
  let component: Comp1375Component;
  let fixture: ComponentFixture<Comp1375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
