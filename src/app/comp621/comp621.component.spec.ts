import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp621Component } from './comp621.component';

describe('Comp621Component', () => {
  let component: Comp621Component;
  let fixture: ComponentFixture<Comp621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
