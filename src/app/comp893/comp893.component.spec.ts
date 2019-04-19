import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp893Component } from './comp893.component';

describe('Comp893Component', () => {
  let component: Comp893Component;
  let fixture: ComponentFixture<Comp893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
