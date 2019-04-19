import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp578Component } from './comp578.component';

describe('Comp578Component', () => {
  let component: Comp578Component;
  let fixture: ComponentFixture<Comp578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
