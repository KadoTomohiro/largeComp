import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp952Component } from './comp952.component';

describe('Comp952Component', () => {
  let component: Comp952Component;
  let fixture: ComponentFixture<Comp952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
