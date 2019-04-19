import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp140Component } from './comp140.component';

describe('Comp140Component', () => {
  let component: Comp140Component;
  let fixture: ComponentFixture<Comp140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
