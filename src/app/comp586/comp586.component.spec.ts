import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp586Component } from './comp586.component';

describe('Comp586Component', () => {
  let component: Comp586Component;
  let fixture: ComponentFixture<Comp586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
