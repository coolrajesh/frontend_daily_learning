import { Component } from '@angular/core';
import { prepTopics } from '../../assets/content/explore-data/prep-data';
import { PrepTopic } from '../models/prep-topic';

@Component({
  selector: 'app-explore-topics',
  standalone: true,
  imports: [],
  templateUrl: './explore-topics.component.html',
  styleUrl: './explore-topics.component.css'
})
export class ExploreTopicsComponent {

  prepTopics: PrepTopic[] = prepTopics;
  constructor() {
    console.log('Explore Topics Component Initialized',this.prepTopics);
  }
}
