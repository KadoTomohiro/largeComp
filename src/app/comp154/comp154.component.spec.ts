import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp154Component } from './comp154.component';

describe('Comp154Component', () => {
  let component: Comp154Component;
  let fixture: ComponentFixture<Comp154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
