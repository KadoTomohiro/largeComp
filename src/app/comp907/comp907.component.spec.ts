import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp907Component } from './comp907.component';

describe('Comp907Component', () => {
  let component: Comp907Component;
  let fixture: ComponentFixture<Comp907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
