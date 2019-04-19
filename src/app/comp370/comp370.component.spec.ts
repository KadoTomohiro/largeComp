import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp370Component } from './comp370.component';

describe('Comp370Component', () => {
  let component: Comp370Component;
  let fixture: ComponentFixture<Comp370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
