import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1837Component } from './comp1837.component';

describe('Comp1837Component', () => {
  let component: Comp1837Component;
  let fixture: ComponentFixture<Comp1837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
