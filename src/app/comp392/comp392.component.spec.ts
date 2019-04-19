import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp392Component } from './comp392.component';

describe('Comp392Component', () => {
  let component: Comp392Component;
  let fixture: ComponentFixture<Comp392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
