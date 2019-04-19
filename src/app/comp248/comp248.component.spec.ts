import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp248Component } from './comp248.component';

describe('Comp248Component', () => {
  let component: Comp248Component;
  let fixture: ComponentFixture<Comp248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
