import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkdownSectionParserService {

  constructor() { }

  parseSections(markdown: string): { title: string, content: string }[] {
    const sectionRegex = /##\s+(.*?)\n([\s\S]*?)(?=\n##|$)/g;
    const sections: { title: string, content: string }[] = [];

    let match;
    while ((match = sectionRegex.exec(markdown)) !== null) {
      const title = match[1].trim();
      const content = match[2].trim();
      sections.push({ title, content });
    }

    return sections;
  }
}
