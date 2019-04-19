import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp970Component } from './comp970.component';

describe('Comp970Component', () => {
  let component: Comp970Component;
  let fixture: ComponentFixture<Comp970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
