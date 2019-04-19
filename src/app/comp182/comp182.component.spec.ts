import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp182Component } from './comp182.component';

describe('Comp182Component', () => {
  let component: Comp182Component;
  let fixture: ComponentFixture<Comp182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
