import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp367Component } from './comp367.component';

describe('Comp367Component', () => {
  let component: Comp367Component;
  let fixture: ComponentFixture<Comp367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
