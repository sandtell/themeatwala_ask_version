import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlidersComponent } from './sliders/sliders';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [SlidersComponent],
	imports: [IonicPageModule.forChild(SlidersComponent)],
	exports: [SlidersComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
