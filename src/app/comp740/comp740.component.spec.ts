import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp740Component } from './comp740.component';

describe('Comp740Component', () => {
  let component: Comp740Component;
  let fixture: ComponentFixture<Comp740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
