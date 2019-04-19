import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1539Component } from './comp1539.component';

describe('Comp1539Component', () => {
  let component: Comp1539Component;
  let fixture: ComponentFixture<Comp1539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
