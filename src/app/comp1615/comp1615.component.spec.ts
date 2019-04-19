import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1615Component } from './comp1615.component';

describe('Comp1615Component', () => {
  let component: Comp1615Component;
  let fixture: ComponentFixture<Comp1615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
