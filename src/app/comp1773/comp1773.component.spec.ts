import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1773Component } from './comp1773.component';

describe('Comp1773Component', () => {
  let component: Comp1773Component;
  let fixture: ComponentFixture<Comp1773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
