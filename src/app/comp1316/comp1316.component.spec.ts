import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1316Component } from './comp1316.component';

describe('Comp1316Component', () => {
  let component: Comp1316Component;
  let fixture: ComponentFixture<Comp1316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
