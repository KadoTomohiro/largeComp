import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp819Component } from './comp819.component';

describe('Comp819Component', () => {
  let component: Comp819Component;
  let fixture: ComponentFixture<Comp819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
