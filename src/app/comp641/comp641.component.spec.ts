import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp641Component } from './comp641.component';

describe('Comp641Component', () => {
  let component: Comp641Component;
  let fixture: ComponentFixture<Comp641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
