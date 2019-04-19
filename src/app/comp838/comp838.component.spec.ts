import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp838Component } from './comp838.component';

describe('Comp838Component', () => {
  let component: Comp838Component;
  let fixture: ComponentFixture<Comp838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
