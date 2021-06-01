import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: SettingsAccountComponent;
  let fixture: ComponentFixture<SettingsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
