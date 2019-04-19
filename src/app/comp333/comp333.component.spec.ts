import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp333Component } from './comp333.component';

describe('Comp333Component', () => {
  let component: Comp333Component;
  let fixture: ComponentFixture<Comp333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
