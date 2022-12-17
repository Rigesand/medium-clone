import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagsComponent} from './components/popularTags.component'
import {PopularTagsService} from './services/popularTags.service'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffectEffect} from './store/effects/getPopularTags.effect'
import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {LoadingModule} from '../loading/loading.module'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffectEffect]),
    ErrorMessageModule,
    LoadingModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
