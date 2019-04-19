import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp923Component } from './comp923.component';

describe('Comp923Component', () => {
  let component: Comp923Component;
  let fixture: ComponentFixture<Comp923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
