import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp614Component } from './comp614.component';

describe('Comp614Component', () => {
  let component: Comp614Component;
  let fixture: ComponentFixture<Comp614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
