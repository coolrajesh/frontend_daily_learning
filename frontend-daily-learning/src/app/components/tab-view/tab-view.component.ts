import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // ✅ import this


@Component({
  selector: 'app-tab-view',
  standalone: true,
  imports: [RouterModule, MarkdownModule, CommonModule, FormsModule],
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.css'
})
export class TabViewComponent {
  @Input() dayId!: string;

  tabs: {
    title: string;
    topic: string;
    solution: string;
    summary?: string;
    image?: string;
    challenge?: string;
    interviewQuestions?: { question: string; answer: string; showAnswer: boolean, reviewed: string, difficulty:string }[];
    quiz?: {
      question: string;
      options: string[];
      answer: string;
      selectedAnswer?: string;
      showAnswer?: boolean;
    }[];
  }[] = [];

  active = '';
  day: number = 1;
  loading = false;
  errorMessage = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.day = parseInt(this.dayId, 10);
    this.loadDayContent();
  }

  loadDayContent() {
    this.loading = true;
    this.errorMessage = '';

    this.http.get<any>('assets/content/data.json').subscribe({
      next: (data) => {
        const dayData = data.find((item: any) => item.day == this.dayId);
        if (!dayData) {
          this.errorMessage = `Day ${this.dayId} content not found.`;
          this.loading = false;
          return;
        }

        this.tabs = dayData.sections.map((tab: any) => {
          // Add quiz helpers
          if (tab.quiz && Array.isArray(tab.quiz)) {
            tab.quiz = tab.quiz.map((q: any) => ({
              ...q,
              selectedAnswer: '',
              showAnswer: false
            }));
          }
          return tab;
        });

        this.active = this.tabs[0]?.title || '';
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = `Failed to load Day ${this.dayId} content.`;
      }
    });
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    alert('Answer copied!');
  }
  markReviewed(question: any) {
    const reviewedKey = `reviewed-${this.dayId}-${question.question}`;
    localStorage.setItem(reviewedKey, JSON.stringify(question.reviewed));
  }


}

