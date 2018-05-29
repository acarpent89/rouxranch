import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HeaderComponent
  }
]);

@NgModule({
  imports: [
    homeRouting
  ],
  declarations: [
  ],
  providers: []
})
export class SharedModule {}