import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { MarkdownSectionParserService } from '../../markdown-section-parser.service';

@Component({
  selector: 'app-tab-view',
  standalone: true,
  imports: [RouterModule,MarkdownModule, CommonModule],
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.css'  
})
export class TabViewComponent {
  @Input() dayId!: string;
  tabs: { title: string; topic: string; solution: string }[] = [];
  active = '';
  day: number = parseInt(this.dayId, 10);
  loading = false;
  errorMessage = '';

  constructor(private http: HttpClient, private parser: MarkdownSectionParserService) { }

  ngOnInit(): void {
    this.loadDayContent();
  }   
 
  loadDayContent() {
    this.loading = true;
    this.errorMessage = '';
    // this.http.get<any>(`assets/content/day${this.dayId}.json`).subscribe({
    this.http.get<any>(`assets/content/data.json`).subscribe({
      next: (data) => {
        const dayData = data.find((item:any) => item.day == this.dayId);
        this.tabs = dayData.sections;
        this.active = this.tabs[0]?.title || '';
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = `Failed to load Day ${this.dayId} content.`;
      }
    });
  }
  
}
