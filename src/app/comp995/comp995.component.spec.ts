import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp995Component } from './comp995.component';

describe('Comp995Component', () => {
  let component: Comp995Component;
  let fixture: ComponentFixture<Comp995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
