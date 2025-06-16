import { TestBed } from '@angular/core/testing';

import { MarkdownSectionParserService } from './markdown-section-parser.service';

describe('MarkdownSectionParserService', () => {
  let service: MarkdownSectionParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownSectionParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
