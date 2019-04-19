import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp552Component } from './comp552.component';

describe('Comp552Component', () => {
  let component: Comp552Component;
  let fixture: ComponentFixture<Comp552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
