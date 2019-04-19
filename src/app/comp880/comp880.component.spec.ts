import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp880Component } from './comp880.component';

describe('Comp880Component', () => {
  let component: Comp880Component;
  let fixture: ComponentFixture<Comp880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
