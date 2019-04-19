import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1996Component } from './comp1996.component';

describe('Comp1996Component', () => {
  let component: Comp1996Component;
  let fixture: ComponentFixture<Comp1996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
