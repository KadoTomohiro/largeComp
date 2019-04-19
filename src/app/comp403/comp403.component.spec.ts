import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp403Component } from './comp403.component';

describe('Comp403Component', () => {
  let component: Comp403Component;
  let fixture: ComponentFixture<Comp403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
