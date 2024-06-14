import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefullComponent } from './statefull.component';

describe('StatefullComponent', () => {
  let component: StatefullComponent;
  let fixture: ComponentFixture<StatefullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatefullComponent]
    });
    fixture = TestBed.createComponent(StatefullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
