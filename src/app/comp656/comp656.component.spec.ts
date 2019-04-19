import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp656Component } from './comp656.component';

describe('Comp656Component', () => {
  let component: Comp656Component;
  let fixture: ComponentFixture<Comp656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
