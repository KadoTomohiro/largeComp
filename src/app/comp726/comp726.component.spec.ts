import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp726Component } from './comp726.component';

describe('Comp726Component', () => {
  let component: Comp726Component;
  let fixture: ComponentFixture<Comp726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
