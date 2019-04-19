import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp550Component } from './comp550.component';

describe('Comp550Component', () => {
  let component: Comp550Component;
  let fixture: ComponentFixture<Comp550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
