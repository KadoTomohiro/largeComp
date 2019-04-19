import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1942Component } from './comp1942.component';

describe('Comp1942Component', () => {
  let component: Comp1942Component;
  let fixture: ComponentFixture<Comp1942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
