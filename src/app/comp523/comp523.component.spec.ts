import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp523Component } from './comp523.component';

describe('Comp523Component', () => {
  let component: Comp523Component;
  let fixture: ComponentFixture<Comp523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
