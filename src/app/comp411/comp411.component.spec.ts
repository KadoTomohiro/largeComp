import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp411Component } from './comp411.component';

describe('Comp411Component', () => {
  let component: Comp411Component;
  let fixture: ComponentFixture<Comp411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
