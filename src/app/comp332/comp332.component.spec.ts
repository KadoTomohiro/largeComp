import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp332Component } from './comp332.component';

describe('Comp332Component', () => {
  let component: Comp332Component;
  let fixture: ComponentFixture<Comp332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
