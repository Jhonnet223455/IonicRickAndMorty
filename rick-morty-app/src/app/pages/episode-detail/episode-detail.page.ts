import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickmortyService } from 'src/app/services/rickmorty.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-episode-detail',
  standalone: true, // 🔹 Asegurar que sea standalone
  imports: [CommonModule, IonicModule], // 🔹 Importa los módulos necesarios
  templateUrl: './episode-detail.page.html',
  styleUrls: ['./episode-detail.page.scss'],
})
export class EpisodeDetailPage implements OnInit {

  episode: any;
  characters: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private rickmortyService: RickmortyService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.episode = JSON.parse(params['episode']);
      this.rickmortyService.getCharacters(this.episode.characters).subscribe(response => {
        this.characters = response;
      });
    });
  }

}
