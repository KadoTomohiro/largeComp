import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp484Component } from './comp484.component';

describe('Comp484Component', () => {
  let component: Comp484Component;
  let fixture: ComponentFixture<Comp484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
