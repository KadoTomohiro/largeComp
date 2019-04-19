import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp435Component } from './comp435.component';

describe('Comp435Component', () => {
  let component: Comp435Component;
  let fixture: ComponentFixture<Comp435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
