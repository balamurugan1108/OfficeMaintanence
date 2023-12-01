import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdatasComponent } from './empdatas.component';

describe('EmpdatasComponent', () => {
  let component: EmpdatasComponent;
  let fixture: ComponentFixture<EmpdatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
