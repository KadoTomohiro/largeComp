import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1182Component } from './comp1182.component';

describe('Comp1182Component', () => {
  let component: Comp1182Component;
  let fixture: ComponentFixture<Comp1182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
