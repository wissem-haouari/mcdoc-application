import { NgModule } from '@angular/core';

import { McdocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [McdocSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [McdocSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class McdocSharedCommonModule {}
