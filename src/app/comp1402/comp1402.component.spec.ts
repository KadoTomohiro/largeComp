import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1402Component } from './comp1402.component';

describe('Comp1402Component', () => {
  let component: Comp1402Component;
  let fixture: ComponentFixture<Comp1402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
