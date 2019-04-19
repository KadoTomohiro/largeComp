import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1830Component } from './comp1830.component';

describe('Comp1830Component', () => {
  let component: Comp1830Component;
  let fixture: ComponentFixture<Comp1830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
