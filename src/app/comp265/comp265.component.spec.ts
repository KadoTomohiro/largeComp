import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp265Component } from './comp265.component';

describe('Comp265Component', () => {
  let component: Comp265Component;
  let fixture: ComponentFixture<Comp265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
