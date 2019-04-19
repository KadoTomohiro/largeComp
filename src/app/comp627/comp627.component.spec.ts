import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp627Component } from './comp627.component';

describe('Comp627Component', () => {
  let component: Comp627Component;
  let fixture: ComponentFixture<Comp627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
