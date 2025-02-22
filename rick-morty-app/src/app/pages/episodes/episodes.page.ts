import { Component, OnInit } from '@angular/core';
import { RickmortyService } from 'src/app/services/rickmorty.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-episodes',
  standalone: true, // 🔹 Asegurar que sea standalone
    imports: [CommonModule, IonicModule], // 🔹 Importa los módulos necesarios
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: any[] = [];

  constructor(private rickmortyService: RickmortyService,
    private router: Router
  ) { }

  

  ngOnInit() {
    this.rickmortyService.getEpisodes().subscribe(response => {
      if (response && response.results) {
        this.episodes = response.results;
      } else {
        console.error('La respuesta no contiene la propiedad results:', response);
      }
    }, error => {
      console.error('Error al obtener episodios:', error);
    });
  }
  
  openEpisode(episode: any) {
    this.router.navigate(['/episode-detail'], { queryParams: { episode: JSON.stringify(episode) } });
  }
}
