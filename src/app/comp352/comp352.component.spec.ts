import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp352Component } from './comp352.component';

describe('Comp352Component', () => {
  let component: Comp352Component;
  let fixture: ComponentFixture<Comp352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
