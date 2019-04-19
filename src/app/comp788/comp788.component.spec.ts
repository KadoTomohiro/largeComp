import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp788Component } from './comp788.component';

describe('Comp788Component', () => {
  let component: Comp788Component;
  let fixture: ComponentFixture<Comp788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
