import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp311Component } from './comp311.component';

describe('Comp311Component', () => {
  let component: Comp311Component;
  let fixture: ComponentFixture<Comp311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
