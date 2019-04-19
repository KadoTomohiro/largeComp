import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp218Component } from './comp218.component';

describe('Comp218Component', () => {
  let component: Comp218Component;
  let fixture: ComponentFixture<Comp218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
