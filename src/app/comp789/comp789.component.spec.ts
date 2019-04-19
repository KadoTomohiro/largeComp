import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp789Component } from './comp789.component';

describe('Comp789Component', () => {
  let component: Comp789Component;
  let fixture: ComponentFixture<Comp789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
