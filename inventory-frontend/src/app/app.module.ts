import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

// Angular Fire
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    // provideFirebaseApp(() => initializeApp(
    //   { projectId: "inventory-ionic-project-80004", 
    //     appId: "1:1097472434579:web:fe7f31a311b43612648866", 
    //     databaseURL: "https://inventory-ionic-project-80004-default-rtdb.asia-southeast1.firebasedatabase.app", storageBucket: "inventory-ionic-project-80004.firebasestorage.app", apiKey: "AIzaSyA2I_Ym9s3XMKFB0W7270w4sIZ1cLFXZnE", authDomain: "inventory-ionic-project-80004.firebaseapp.com", messagingSenderId: "1097472434579" })),
    // provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideHttpClient()
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
