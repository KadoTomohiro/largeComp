import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1063Component } from './comp1063.component';

describe('Comp1063Component', () => {
  let component: Comp1063Component;
  let fixture: ComponentFixture<Comp1063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
