import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommComponent } from './comm/comm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MyfilterPipe } from './myfilter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        ForumComponent,
        PostComponent,
        CommComponent,
        PostDetailsComponent,
        MyfilterPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        HttpClientModule /*,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
)*/,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
