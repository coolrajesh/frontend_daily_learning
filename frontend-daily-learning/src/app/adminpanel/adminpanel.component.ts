import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent {

  sectionTitle = 'Binding Types in Angular';
  sectionEmoji = '⚡';
  sectionTag = 'h3';
  sectionColor = '#f59e0b';

  bindings: BindingEntry[] = [
    {
      emoji: '✔️',
      label: 'Interpolation',
      syntax: '{{ value }}',
      description: 'Inserts dynamic values from the component into the template as plain text.',
      color: '#10b981',
      tag: 'li'
    }
  ];

  addBinding() {
    this.bindings.push({
      emoji: '✔️',
      label: '',
      syntax: '',
      description: '',
      color: '#000000',
      tag: 'li'
    });
  }

  removeBinding(index: number) {
    this.bindings.splice(index, 1);
  }

  generateSummary(): string {
    const items = this.bindings.map(b =>
      `<${b.tag} style="margin-bottom:10px;">
        <span style="color:${b.color};">${b.emoji} <strong>${b.label}</strong> (<code>${b.syntax}</code>)</span> – ${b.description}
      </${b.tag}>`
    ).join('\n');

    return `<${this.sectionTag} style="color:${this.sectionColor};">${this.sectionEmoji} ${this.sectionTitle}</${this.sectionTag}>
<ul style="list-style:none; padding-left:0;">
${items}
</ul>`;
  }

  getJsonExport(): string {
    return JSON.stringify({ summary: this.generateSummary() }, null, 2);
  }

  getMarkdownExport(): string {
    return this.bindings.map(b =>
      `- ${b.emoji} **${b.label}** (\`${b.syntax}\`) – ${b.description}`
    ).join('\n');
  }
}

interface BindingEntry {
  emoji: string;
  label: string;
  syntax: string;
  description: string;
  color: string;
  tag: string;
}