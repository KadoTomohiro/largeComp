import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp890Component } from './comp890.component';

describe('Comp890Component', () => {
  let component: Comp890Component;
  let fixture: ComponentFixture<Comp890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
