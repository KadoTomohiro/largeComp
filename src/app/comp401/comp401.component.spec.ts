import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp401Component } from './comp401.component';

describe('Comp401Component', () => {
  let component: Comp401Component;
  let fixture: ComponentFixture<Comp401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
