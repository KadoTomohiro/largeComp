import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1372Component } from './comp1372.component';

describe('Comp1372Component', () => {
  let component: Comp1372Component;
  let fixture: ComponentFixture<Comp1372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
