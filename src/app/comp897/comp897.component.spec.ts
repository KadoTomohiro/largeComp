import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp897Component } from './comp897.component';

describe('Comp897Component', () => {
  let component: Comp897Component;
  let fixture: ComponentFixture<Comp897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
