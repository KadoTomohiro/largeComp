import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1363Component } from './comp1363.component';

describe('Comp1363Component', () => {
  let component: Comp1363Component;
  let fixture: ComponentFixture<Comp1363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
