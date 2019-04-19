import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp395Component } from './comp395.component';

describe('Comp395Component', () => {
  let component: Comp395Component;
  let fixture: ComponentFixture<Comp395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
