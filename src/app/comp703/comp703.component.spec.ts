import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp703Component } from './comp703.component';

describe('Comp703Component', () => {
  let component: Comp703Component;
  let fixture: ComponentFixture<Comp703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
