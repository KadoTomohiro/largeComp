import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp888Component } from './comp888.component';

describe('Comp888Component', () => {
  let component: Comp888Component;
  let fixture: ComponentFixture<Comp888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
