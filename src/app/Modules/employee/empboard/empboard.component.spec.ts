import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpboardComponent } from './empboard.component';

describe('EmpboardComponent', () => {
  let component: EmpboardComponent;
  let fixture: ComponentFixture<EmpboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
