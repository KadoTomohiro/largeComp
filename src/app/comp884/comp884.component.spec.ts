import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp884Component } from './comp884.component';

describe('Comp884Component', () => {
  let component: Comp884Component;
  let fixture: ComponentFixture<Comp884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
