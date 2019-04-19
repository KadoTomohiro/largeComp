import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp804Component } from './comp804.component';

describe('Comp804Component', () => {
  let component: Comp804Component;
  let fixture: ComponentFixture<Comp804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
