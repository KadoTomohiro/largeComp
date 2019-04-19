import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1249Component } from './comp1249.component';

describe('Comp1249Component', () => {
  let component: Comp1249Component;
  let fixture: ComponentFixture<Comp1249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
