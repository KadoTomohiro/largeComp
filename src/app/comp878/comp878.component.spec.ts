import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp878Component } from './comp878.component';

describe('Comp878Component', () => {
  let component: Comp878Component;
  let fixture: ComponentFixture<Comp878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
