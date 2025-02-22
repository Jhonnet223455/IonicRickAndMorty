import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeDetailPageRoutingModule } from './episode-detail-routing.module';

import { EpisodeDetailPage } from './episode-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeDetailPageRoutingModule
  ],
  declarations: []
})
export class EpisodeDetailPageModule {}
