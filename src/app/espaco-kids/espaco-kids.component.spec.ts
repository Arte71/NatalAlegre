import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacoKidsComponent } from './espaco-kids.component';

describe('EspacoKidsComponent', () => {
  let component: EspacoKidsComponent;
  let fixture: ComponentFixture<EspacoKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspacoKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacoKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
