import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclinkView } from './doclink-view';

describe('DoclinkView', () => {
  let component: DoclinkView;
  let fixture: ComponentFixture<DoclinkView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoclinkView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoclinkView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
